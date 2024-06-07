<!DOCTYPE html>
<html lang="ru">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>{{ config('app.name', 'Moldovacenter.store') }}</title>

    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css">
    <link href="https://fonts.googleapis.com/css?family=Open+Sans:300,400,700" rel="stylesheet">
    <link rel="stylesheet" href="{{ mix('css/app.css') }}">
    <link rel="stylesheet" href="{{ mix('css/admin.css') }}">
    @yield('customcss')
</head>

<body>
    @yield('top')
    @include('layouts.nav')
    <div class="container is-widescreen">
        <!-- <div class="columns"> -->
            
            <!-- <div class="column"> -->
                @if (session('status'))
                    <div class="notification is-success">
                        <button class="delete"></button>
                        {{ session('status') }}
                    </div>
                @endif
                
                @yield('crumbs')
                
                @yield('hero')

                @yield('info')

                @yield('content')
            <!-- </div> -->
        <!-- </div> -->
    </div>
    <script src="{{ mix('js/app.js') }}"></script>
    @yield('customjs')
    </body>

</html>
