@extends('layouts.admin-full')

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

@section('hero')
<div class="container">
    <div class="box">
    <form action="{{ route('a.i.search') }}" method="post">
        @csrf
        <h2 class="title is-4 has-text-centered">Выбрать по строке поиска</h2>

        <div class="field">
            <label class="label" for="search">Найти</label>

            <div class="control">
                <input class="input" id="search" name="search" type="text" placeholder="Что найти" value="{{ $str ?? old('search') }}">
                @error('search')
                <ul>
                    @foreach($errors->get('search') as $m)
                    <li><span class="tag has-text-danger">{{$m}}</span></li>
                    @endforeach
                </ul>
                @enderror
            </div>

            <div class="field is-grouped is-grouped-centered">
                <div class="control">
                    <button class="button is-primary" type="submit">Выбрать</button>
                </div>
            </div>
        </div>
    </form>
    </div>
</div>
@endsection

@section('info')
<div class="level">
<h1 class="title is-4 has-text-centered has-text-info level-left">Всего {{ $people->count() }} строк найдено по запросу "<i>{{ $str }}</i>" </h1>
<span class="tag is-danger level-right"><a href="{{ route('a.i.export', $str) }}">Скачать выбранное (XLSX)</a></span>
</div>
@endsection

@section('content')
<div class="table-container is-widescreen">
    <table class="table is-fullwidth is-striped">
        <tbody>
            <tr>
                <th>Фамилия</th>
                <th>Имя</th>
                <!-- <th>middlename</th> -->
                <th>Дата рождения</th>
                <th>Email</th>
                <th>Телефон</th>
                <!-- <th>Адрес</th> -->
                <th>Работа</th>

            </tr>
            @foreach ($people as $p)
            <tr>
                @can('write data')
                <td>
                    <a href="{{ route('a.i.edit', $p->id) }}" title="Редактировать">{{ $p->surname }}</a>
                </td>
                <td>
                    <a href="{{ route('a.i.edit', $p->id) }}" title="Редактировать">{{ $p->name }}</a>
                </td>
                @else
                <td>{{ $p->surname }}</td>
                <td>{{ $p->name }}</td>
                @endcan
                <!-- <td>{{ $p->middlename }}</td> -->
                <td>{{ $p->dob }}</td>
                <td>{{ $p->email }}</td>
                <td>{{ $p->phone }}</td>
                <!-- <td>{{ $p->addr }}</td> -->
                <td>{{ $p->work }}</td>
            </tr>
            @endforeach
        </tbody>
    </table>
</div>
    <hr>
<div class="container">
    <div class="box">
    <form action="{{ route('a.i.search') }}" method="post">
        @csrf
        <h2 class="title is-4 has-text-centered">Выбрать по строке поиска</h2>

        <div class="field">
            <label class="label" for="search">Найти</label>

            <div class="control">
                <input class="input" id="search" name="search" type="text" placeholder="Что найти" value="{{ $str ?? old('search') }}">
                @error('search')
                <ul>
                    @foreach($errors->get('search') as $m)
                    <li><span class="tag has-text-danger">{{$m}}</span></li>
                    @endforeach
                </ul>
                @enderror
            </div>

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