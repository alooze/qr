@extends('layouts.main')

@section('body')
    <section class="section">
        <div class="container">
            <div class="columns is-centered">
                <div class="column is-half">
                    <div class="box">
                        <form method="POST" action="{{ route('password.update') }}">
                        @csrf
                        <!-- Password Reset Token -->
                        <input type="hidden" name="token" value="{{ $request->route('token') }}">

                        <h2 class="title is-4 has-text-centered">Восстановить пароль</h2>

                        <!-- Validation Errors -->
                        <x-auth-validation-errors class="mb-4" :errors="$errors" />

                        <div class="field">
                            <label class="label" for="email">Email</label>

                            <div class="control">
                                <input class="input" id="email" name="email" type="email" placeholder="Ваш Email" value="{{ old('email', $request->email) }}" required autofocus>
                            </div>
                        </div>
                        <div class="field">
                            <label class="label" for="password">Пароль</label>
                            <div class="control">
                                <input class="input" type="password" id="password" name="password" placeholder="Ваш новый пароль" required>
                            </div>
                        </div>
                        <div class="field">
                            <label class="label" for="password_confirmation">Подтверждение пароля</label>
                            <div class="control">
                                <input class="input" type="password" id="password_confirmation" name="password_confirmation" placeholder="Ваш новый пароль повторно" required>
                            </div>
                        </div>


                        <div class="field is-grouped is-grouped-centered">
                            <div class="control">
                                <button class="button is-primary" type="submit">Установить новый пароль</button>
                            </div>
                        </div>
                        </form>
                        <div class="field">
                            @if (Route::has('login'))
                                <a class="link" href="{{ route('login') }}">
                                    Войти на сайт без сброса пароля
                                </a>
                            @endif
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
@endsection