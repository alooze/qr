@extends('layouts.admin')

@section('content')
<ul>
@foreach ($roles as $role)
<li>{{ $role->name }} ({{ $role->code }})</li>
@endforeach
</ul>
@endsection