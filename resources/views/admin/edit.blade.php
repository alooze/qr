@extends('layouts.admin')

@section('crumbs')
<nav class="breadcrumb" aria-label="breadcrumbs">
    <ul>
        <li><a href="/">Панель</a></li>
        <li><a href="{{ route('a.i.people') }}">Все записи</a></li>
        <li class="is-active">
            <a href="javascript:;" aria-current="page">Редактировать запись</a>
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
                    <form method="POST" action="{{ route('a.i.save', $p->id) }}">
                    @csrf
                    <h2 class="title is-4 has-text-centered">Редактировать запись</h2>

                    <div class="field">
                        <label class="label" for="surname">Фамилия</label>

                        <div class="control">
                            <input class="input" id="surname" name="surname" type="text" placeholder="Фамилия" value="{{ $p->surname }}">
                            @error('surname')
                            <ul>
                                @foreach($errors->get('surname') as $m)
                                <li><span class="tag has-text-danger">{{$m}}</span></li>
                                @endforeach
                            </ul>
                            @enderror
                        </div>
                    </div>

                    <div class="field">
                        <label class="label" for="name">Имя</label>

                        <div class="control">
                            <input class="input" id="name" name="name" type="text" placeholder="Имя" value="{{ $p->name }}">
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
                        <label class="label" for="middlename">Отчество</label>

                        <div class="control">
                            <input class="input" id="middlename" name="middlename" type="text" placeholder="Отчество" value="{{ $p->middlename }}">
                            @error('middlename')
                            <ul>
                                @foreach($errors->get('middlename') as $m)
                                <li><span class="tag has-text-danger">{{$m}}</span></li>
                                @endforeach
                            </ul>
                            @enderror
                        </div>
                    </div>

                    <div class="field">
                        <label class="label" for="dob">Дата рождения</label>

                        <div class="control">
                            <input class="input" id="dob" name="dob" type="text" placeholder="Дата рождения" value="{{ $p->dob }}">
                            @error('dob')
                            <ul>
                                @foreach($errors->get('dob') as $m)
                                <li><span class="tag has-text-danger">{{$m}}</span></li>
                                @endforeach
                            </ul>
                            @enderror
                        </div>
                    </div>

                    <div class="field">
                        <label class="label" for="email">Email</label>

                        <div class="control">
                            <input class="input" id="email" name="email" type="text" placeholder="Email" value="{{ $p->email }}">
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
                        <label class="label" for="phone">Телефон</label>

                        <div class="control">
                            <input class="input" id="phone" name="phone" type="text" placeholder="Телефон" value="{{ $p->phone }}">
                            @error('phone')
                            <ul>
                                @foreach($errors->get('phone') as $m)
                                <li><span class="tag has-text-danger">{{$m}}</span></li>
                                @endforeach
                            </ul>
                            @enderror
                        </div>
                    </div>

                    <div class="field">
                        <label class="label" for="addr">Адрес</label>

                        <div class="control">
                            <input class="input" id="addr" name="addr" type="text" placeholder="Адрес" value="{{ $p->addr }}">
                            @error('addr')
                            <ul>
                                @foreach($errors->get('addr') as $m)
                                <li><span class="tag has-text-danger">{{$m}}</span></li>
                                @endforeach
                            </ul>
                            @enderror
                        </div>
                    </div>

                    <div class="field">
                        <label class="label" for="work">Работа</label>

                        <div class="control">
                            <input class="input" id="work" name="work" type="text" placeholder="Работа" value="{{ $p->work }}">
                            @error('work')
                            <ul>
                                @foreach($errors->get('work') as $m)
                                <li><span class="tag has-text-danger">{{$m}}</span></li>
                                @endforeach
                            </ul>
                            @enderror
                        </div>
                    </div>

                    <div class="field">
                        <label class="label" for="comment">Комментарий</label>

                        <div class="control">
                            <textarea class="textarea" id="comment" name="comment"placeholder="Комментарий">{{ $p->comment }}</textarea>
                        </div>
                    </div>
                    
                    <div class="field is-grouped is-grouped-centered">
                        <div class="control">
                            <button class="button is-primary" type="submit">Сохранить</button>
                            <a class="button is-danger" href="{{ route('a.i.people') }}">Отмена</a>
                        </div>
                    </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
</section>
@endsection