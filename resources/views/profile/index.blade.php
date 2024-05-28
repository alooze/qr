@extends('layouts.admin')

@section('content')
<section class="section">
    <div class="container">
        <div class="columns is-centered">
            <div class="column is-half">
                <div class="box">
                    <form method="POST" action="{{ route('a.p.save') }}">
                    @csrf
                    <h2 class="title is-4 has-text-centered">Сменить email/пароль</h2>
                    <div class="field">
                        <label class="label" for="name">Ваше имя</label>

                        <div class="control">
                            <input class="input" id="name" name="name" type="text" placeholder="Ваше имя" value="{{ auth()->user()->name }}">
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
                            <input class="input" id="email" name="email" type="email" placeholder="Ваш Email" value="{{ auth()->user()->email }}">
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
                </div>
            </div>
        </div>
    </div>
</section>
@endsection