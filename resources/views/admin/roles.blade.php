@extends('layouts.admin')

@section('crumbs')
<nav class="breadcrumb" aria-label="breadcrumbs">
    <ul>
        <li><a href="/">Панель</a></li>
        <li class="is-active">
            <a href="javascript:;" aria-current="page">Роли пользователей</a>
        </li>
    </ul>
</nav>
@endsection

@section('content')
<div class="content">
    <form action="{{ route('a.r.saveall') }}" method="post">
    @csrf
    <table class="table is-fullwidth is-striped">
        <tbody>
            @foreach($users as $u)
            @if(!$u->hasRole('Root'))
            <tr>
                <td width="5%">
                    {{ $u->id }}.
                </td>
                <td>
                    {{ $u->name }} 
                </td>
                <td class="">
                    <a class="button is-small is-primary" href="{{ route('a.u.edit', $u->id) }}">Править</a>
                </td>
                <td class="has-text-link">
                    @foreach ($roles as $r)
                    @if ($r->name == 'Root')
                    @elseif ($r->name == 'Admin' && !auth()->user()->can('make admin'))
                    @else
                    <div>
                    <label class="checkbox">
                        <input type="checkbox" name="roles[{{ $u->id }}][]" value="{{ $r->name }}" {{ $u->hasRole($r->name) ? 'checked' : '' }}/>
                        {{ $r->name }}
                    </label>
                    </div>
                    @endif
                    @endforeach   
                </td>
            </tr>
            @endif
            @endforeach
        </tbody>
    </table>
    <div class="field is-grouped is-grouped-centered">
        <div class="field is-grouped is-grouped-centered">
        <div class="control">
            <button class="button is-primary" type="submit">Сохранить</button>
        </div>
    </div>     
    </form>
</div>
</div>
@endsection