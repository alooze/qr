@extends('layouts.main')

@section('body')
    <section class="section">
        <div class="container">
            <div class="columns is-centered">
                <div class="column is-half">
                    <div class="box">
                        <form method="POST" action="{{ route('password.email') }}">
                        @csrf
                        <h2 class="title is-4 has-text-centered">Восстановить пароль</h2>
                        <span>Мы вышлем вам на email ссылку для сброса пароля.</span>
                        <hr>
                        <div class="field">
                            <label class="label" for="email">Email</label>

                            <div class="control">
                                <input class="input" id="email" name="email" type="email" placeholder="Ваш Email" value="{{ old('email') }}" required autofocus>
                            </div>
                        </div>
                        <div class="field is-grouped is-grouped-centered">
                            <div class="control">
                                <button class="button is-primary" type="submit">Сбросить пароль</button>
                            </div>
                        </div>
                        </form>
                        <div class="field">
                            @if (Route::has('login'))
                                <a class="link" href="{{ route('login') }}">
                                    Мне не нужна ссылка, я помню пароль
                                </a>
                            @endif
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
@endsection