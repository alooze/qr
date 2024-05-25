@extends('layouts.admin')

@section('hero')
<section class="hero is-info welcome is-small">
                    <div class="hero-body">
                        <div class="container">
                            <h1 class="title">
                                Hello, Admin.
                            </h1>
                            <h2 class="subtitle">
                                I hope you are having a great day!
                            </h2>
                        </div>
                    </div>
                </section>

                @can('any', App\Models\User::class)
                123
                @else
                456
                @endcan
@endsection