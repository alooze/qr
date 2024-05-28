@extends('layouts.admin')

@section('crumbs')
<nav class="breadcrumb" aria-label="breadcrumbs">
    <ul>
        <li><a href="/">Панель</a></li>
        <li class="is-active">
            <a href="javascript:;" aria-current="page">Пользователи</a>
        </li>
    </ul>
</nav>
@endsection

@section('content')
<div class="content">
    <table class="table is-fullwidth is-striped">
        <tbody>
            @foreach($users as $u)
            @if(auth()->user()->hasRole('Root') || !$u->hasRole('Root'))
            <tr>
                <td width="5%">
                    {{ $u->id }}.
                    <!-- <i class="fa fa-bell-o"></i> -->
                </td>
                <td>
                    {{ $u->name }} 
                </td>
                <td class="">
                    <a class="button is-small is-primary" href="{{ route('a.u.edit', $u->id) }}">Править</a>
                </td>
                <td class="has-text-link">
                    {{ $u->roles->implode('name', ',') }}
                </td>
                <td class="">
                    <a class="button is-small is-secondary" href="{{ route('a.r.edit', $u->id) }}">Роли</a>
                </td>
                <td class="level-right">
                    <a class="button is-small is-danger" href="{{ route('a.u.delete', $u->id) }}" onclick="return confirm('Вы уверены, что хотите удалить пользователя?');">Удалить</a>
                </td>
            </tr>
            @endif
            @endforeach
        </tbody>
    </table>
    <a href="{{ route('a.u.add') }}" class="button is-small is-primary">Добавить пользователя</a>
</div>
</div>
@endsection