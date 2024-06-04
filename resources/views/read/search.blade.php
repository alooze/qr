@extends('layouts.admin')

@section('crumbs')
<nav class="breadcrumb" aria-label="breadcrumbs">
    <ul>
        <li><a href="/">Панель</a></li>
        <li class="is-active">
            <a href="javascript:;" aria-current="page">Результаты поиска</a>
        </li>
    </ul>
</nav>
@endsection

@section('content')
<h1 class="title is-4 has-text-centered has-text-info">Поиск по строке "{{ $str }}"</h1>

<div class="table-container">
    @foreach ($uList as $ulst)
    <h3 class="title is-3 has-text-info">{{ $ulst->title }}:</h3>
    <table class="table is-fullwidth is-striped">
        <tbody>
            <tr>
                @foreach($ulst->expandHeader() as $col)
                <th>
                    {{ $col }}
                </th>
                @endforeach
            </tr>
            @foreach ($lines[$ulst->id] as $l)
            <tr>
                @foreach($l->expandData() as $col)
                <td>
                    {{ strlen($col) > 200 ? transform($col, function($s) {
                        $ar = explode(' ', substr($s, 0, 80));
                        array_pop($ar);
                        return implode(' ', $ar) . '...';
                    }) : $col }}
                </td>
                @endforeach
            </tr>
            @endforeach
        </tbody>
    </table>
    @endforeach
</div>
<a href="{{ route('a.l.all', $id) }}" class="button is-small is-primary">Просмотр всего списка</a>
    <hr>
<div class="container">
    <div class="box">
    <form action="{{ route('a.l.search', $id) }}" method="post">
        @csrf
        <h2 class="title is-4 has-text-centered">Выбрать по строке поиска</h2>

        <div class="field">
            <label class="label" for="search">Найти</label>

            <div class="control">
                <input class="input" id="search" name="search" type="text" placeholder="Что найти" value="{{ $str }}">
                @error('search')
                <ul>
                    @foreach($errors->get('search') as $m)
                    <li><span class="tag has-text-danger">{{$m}}</span></li>
                    @endforeach
                </ul>
                @enderror
            </div>

            <label class="checkbox" for="full">
                <input type="checkbox" name="full" id="full" {{ $full ? 'checked' : '' }} />
                Искать по всем спискам
            </label>

            <div class="field is-grouped is-grouped-centered">
                <div class="control">
                    <button class="button is-primary" type="submit">Выбрать</button>
                </div>
            </div>
        </div>
    </form>
    </div>
</div>
</div>
@endsection