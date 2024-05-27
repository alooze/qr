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
<!-- <section class="info-tiles">
    <div class="tile is-ancestor has-text-centered">
        <div class="tile is-parent">
            <article class="tile is-child box">
                <p class="title">439k</p>
                <p class="subtitle">Users</p>
            </article>
        </div>
        <div class="tile is-parent">
            <article class="tile is-child box">
                <p class="title">59k</p>
                <p class="subtitle">Products</p>
            </article>
        </div>
        <div class="tile is-parent">
            <article class="tile is-child box">
                <p class="title">3.4k</p>
                <p class="subtitle">Open Orders</p>
            </article>
        </div>
        <div class="tile is-parent">
            <article class="tile is-child box">
                <p class="title">19</p>
                <p class="subtitle">Exceptions</p>
            </article>
        </div>
    </div>
</section> -->
@endsection