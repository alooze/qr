@extends('layouts.admin')

@section('hero')
<section class="hero is-info welcome is-small">
    <div class="hero-body">
        <div class="container">
            <h1 class="title">
                Привет, {{ auth()->user()->name }}.
            </h1>
            <h2 class="subtitle">
                Выбери раздел для работы
            </h2>
        </div>
    </div>
</section>
@endsection

@section('info')
<section class="info-tiles">
    <div class="tile is-ancestor has-text-centered">
        @foreach($lists as $l)
        <div class="tile is-parent">
            <article class="tile is-child box">
                @can('read data')
                <a href="{{ route('a.l.view', $l->id) }}">
                @endcan
                <p class="title">{{ $l->title }}</p>
                <p class="subtitle">{{ $l->comment }}</p>
                @can('read data')
                </a>
                @endcan
            </article>
        </div>
        @endforeach
    </div>
</section>
@endsection