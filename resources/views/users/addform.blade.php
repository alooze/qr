@extends('layouts.admin')

@section('crumbs')
<nav class="breadcrumb" aria-label="breadcrumbs">
    <ul>
        <li><a href="/">Панель</a></li>
        <li><a href="{{ route('a.u.index') }}">Пользователи</a></li>
        <li class="is-active">
            <a href="javascript:;" aria-current="page">Создать пользователя</a>
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
                    <form method="POST" action="{{ route('a.u.save') }}">
                    @csrf
                    <h2 class="title is-4 has-text-centered">Создать пользователя</h2>
                    <div class="field">
                        <label class="label" for="name">Имя</label>

                        <div class="control">
                            <input class="input" id="name" name="name" type="text" placeholder="Имя" value="{{ old('name') }}">
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
                            <input class="input" id="email" name="email" type="email" placeholder="Email" value="{{ old('email') }}">
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
                        <label class="label" for="password">Пароль</label>
                        <div class="control">
                            <input class="input" type="password" id="password" name="password" placeholder="Пароль">
                            @error('password')
                            <ul>
                                @foreach($errors->get('password') as $m)
                                <li><span class="tag has-text-danger">{{$m}}</span></li>
                                @endforeach
                            </ul>
                            @enderror
                        </div>
                    </div>

                    <div class="field">
                        <label class="label" for="roles">Роли для пользователя:</label>
                        <div class="control">
                            <div class="select is-multiple">
                                <select multiple size="2" name="roles[]">
                                    @foreach($roles as $r)
                                    @if ($r->name == 'Root' && !auth()->user()->hasRole('Root'))
                                    @elseif ($r->name == 'Admin' && !auth()->user()->can('make admin'))
                                    @else
                                    <option value="{{ $r->name }}">{{ $r->name }}</option>
                                    @endif
                                    @endforeach
                                </select>
                            </div>
                            @error('roles')
                            <ul>
                                @foreach($errors->get('roles') as $m)
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
                </div>
            </div>
        </div>
    </div>
</section>
@endsection