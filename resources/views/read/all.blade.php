@extends('layouts.admin')

@section('crumbs')
<nav class="breadcrumb" aria-label="breadcrumbs">
    <ul>
        <li><a href="/">Панель</a></li>
        <li class="is-active">
            <a href="javascript:;" aria-current="page">Все строки списка "{{ $uList->title }}"</a>
        </li>
    </ul>
</nav>
@endsection

@section('content')
<h1 class="title is-4 has-text-centered has-text-info">Всего {{ $cnt }} строк</h1>

<div class="table-container">
    <table class="table is-fullwidth is-striped">
        <tbody>
            <tr>
                @foreach($uList->expandHeader() as $col)
                <th>
                    {{ $col }}
                </th>
                @endforeach
            </tr>
            @foreach ($lines as $l)
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
                @can('write data')
                <td>
                    <a href="{{ route('a.l.edit', $l->id) }}" class="button is-primary">Редактировать</a>
                </td>
                @endcan
            </tr>
            @endforeach
        </tbody>
    </table>
</div>
    <hr>
<div class="container">
    <div class="box">
    <form action="{{ route('a.l.search', $id) }}" method="post">
        @csrf
        <h2 class="title is-4 has-text-centered">Выбрать по строке поиска</h2>

        <div class="field">
            <label class="label" for="search">Найти</label>

            <div class="control">
                <input class="input" id="search" name="search" type="text" placeholder="Что найти" value="{{ old('search') }}">
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