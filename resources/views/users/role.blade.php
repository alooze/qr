@extends('layouts.admin')

@section('crumbs')
<nav class="breadcrumb" aria-label="breadcrumbs">
    <ul>
        <li><a href="/">Панель</a></li>
        <li><a href="{{ route('a.u.index') }}">Пользователи</a></li>
        <li class="is-active">
            <a href="javascript:;" aria-current="page">Роли пользователя #{{ $user->id }}</a>
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
                    <form method="POST" action="{{ route('a.r.save', $user->id) }}">
                    @csrf
                    <h2 class="title is-4 has-text-centered">Роли пользователя #{{ $user->id }} {{ $user->name }}</h2>
                    @foreach ($roles as $r)
                    @if ($r->name == 'Root' && !auth()->user()->hasRole('Root'))
                    @elseif ($r->name == 'Admin' && !auth()->user()->can('make admin'))
                    @else
                    <div>
                    <label class="checkbox">
                        <input type="checkbox" name="roles[]" value="{{ $r->name }}" {{ $user->hasRole($r->name) ? 'checked' : '' }}/>
                        {{ $r->name }}
                    </label>
                    </div>
                    @endif
                    @endforeach                    
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