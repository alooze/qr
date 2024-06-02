@extends('layouts.admin')

@section('crumbs')
<nav class="breadcrumb" aria-label="breadcrumbs">
    <ul>
        <li><a href="/">Панель</a></li>
        <li class="is-active">
            <a href="javascript:;" aria-current="page">Загрузить новый список</a>
        </li>
    </ul>
</nav>
@endsection

@section('content')
<div class="content">
    <div class="column">
    <div class="box">
    <form action="{{ route('a.w.create') }}" method="post" enctype="multipart/form-data">
        @csrf

        <div class="field">
            <label class="label" for="title">Наименование списка</label>

            <div class="control">
                <input class="input" id="title" name="title" type="text" placeholder="Наименование списка" value="{{ old('title') }}">
                @error('title')
                <ul>
                    @foreach($errors->get('title') as $m)
                    <li><span class="tag has-text-danger">{{$m}}</span></li>
                    @endforeach
                </ul>
                @enderror
            </div>
        </div>

        <div class="field">
            <label class="label" for="comment">Комментарий</label>

            <div class="control">
                <input class="input" id="comment" name="comment" type="text" placeholder="Комментарий" value="{{ old('comment') }}">
                @error('comment')
                <ul>
                    @foreach($errors->get('comment') as $m)
                    <li><span class="tag has-text-danger">{{$m}}</span></li>
                    @endforeach
                </ul>
                @enderror
            </div>
        </div>
        <hr>
        <div class="field">
            <div class="file is-boxed is-centered has-name">
                <label class="file-label">
                    <input class="file-input" type="file" name="ufile" />
                    <span class="file-cta">
                        <span class="file-icon">
                            <i class="fa fa-upload"></i>
                        </span>
                        <span class="file-label"> Выберите файл </span>
                    </span>
                    <span class="file-name"></span>
                </label>
                @error('ufile')
                <ul>
                    @foreach($errors->get('ufile') as $m)
                    <li><span class="tag has-text-danger">{{$m}}</span></li>
                    @endforeach
                </ul>
                @enderror
            </div>
        </div>

        <div class="field is-grouped is-grouped-centered">
            <div class="control">
                <button class="button is-primary" type="submit">Загрузить и создать список</button>
            </div>
        </div>
    </form>
    </div>
    </div>
</div>
</div>
@endsection