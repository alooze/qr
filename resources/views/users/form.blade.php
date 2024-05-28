@extends('layouts.admin')

@section('crumbs')
<nav class="breadcrumb" aria-label="breadcrumbs">
    <ul>
        <li><a href="/">Панель</a></li>
        <li><a href="{{ route('a.u.index') }}">Пользователи</a></li>
        <li class="is-active">
            <a href="javascript:;" aria-current="page">Редактировать пользователя</a>
        </li>
    </ul>
</nav>
@endsection

@section('content')
<section class="section">
    <div class="container">
        <div class="columns is-centered">
            <div class="column is-half">
                <div class="box">
                    <form method="POST" action="{{ route('a.u.update', $user->id) }}">
                    @csrf
                    <h2 class="title is-4 has-text-centered">Редактировать пользователя #{{ $user->id }}</h2>
                    <div class="field">
                        <label class="label" for="name">Имя</label>

                        <div class="control">
                            <input class="input" id="name" name="name" type="text" placeholder="Имя" value="{{ $user->name }}">
                            @error('name')
                            <ul>
                                @foreach($errors->get('name') as $m)
                                <li><span class="tag has-text-danger">{{$m}}</span></li>
                                @endforeach
                            </ul>
                            @enderror
                        </div>
                    </div>
                    <div class="field">
                        <label class="label" for="email">Email</label>

                        <div class="control">
                            <input class="input" id="email" name="email" type="email" placeholder="Email" value="{{ $user->email }}">
                            @error('email')
                            <ul>
                                @foreach($errors->get('email') as $m)
                                <li><span class="tag has-text-danger">{{$m}}</span></li>
                                @endforeach
                            </ul>
                            @enderror
                        </div>
                    </div>
                    <div class="field">
                        <label class="label" for="password">Новый пароль</label>
                        <div class="control">
                            <input class="input" type="password" id="password" name="password" placeholder="Новый пароль">
                            @error('password')
                            <ul>
                                @foreach($errors->get('password') as $m)
                                <li><span class="tag has-text-danger">{{$m}}</span></li>
                                @endforeach
                            </ul>
                            @enderror
                        </div>
                    </div>
                    
                    <div class="field is-grouped is-grouped-centered">
                        <div class="control">
                            <button class="button is-primary" type="submit">Сохранить</button>
                        </div>
                    </div>
                    </form>
                    <div class="field">
                        <a class="link" href="{{ route('a.r.edit', $user->id) }}">
                            Редактировать роль пользователя
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>
@endsection