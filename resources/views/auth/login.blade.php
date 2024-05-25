@extends('layouts.main')

@section('body')
    <section class="section">
        <div class="container">
            <div class="columns is-centered">
                <div class="column is-half">
                    <div class="box">
                        <form method="POST" action="{{ route('login') }}">
                        @csrf
                        <h2 class="title is-4 has-text-centered">Войти</h2>
                        <div class="field">
                            <label class="label" for="email">Email</label>

                            <div class="control">
                                <input class="input" id="email" name="email" type="email" placeholder="Ваш Email" value="{{ old('email') }}" required autofocus>
                            </div>
                        </div>
                        <div class="field">
                            <label class="label" for="password">Пароль</label>
                            <div class="control">
                                <input class="input" type="password" id="password" name="password" placeholder="Ваш пароль" required autocomplete="current-password">
                            </div>
                        </div>
                        <div class="field">
                            <label for="remember_me" class="checkbox">
                                <input id="remember_me" type="checkbox" name="remember">
                                <span class="">Запомнить меня</span>
                            </label>
                        </div>
                        <div class="field is-grouped is-grouped-centered">
                            <div class="control">
                                <button class="button is-primary" type="submit">Войти</button>
                            </div>
                        </div>
                        </form>
                        <div class="field">
                            @if (Route::has('password.request'))
                                <a class="link" href="{{ route('password.request') }}">
                                    Забыли пароль?
                                </a>
                            @endif
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
@endsection