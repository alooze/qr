<!DOCTYPE html>
<html lang="ru">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>{{ config('app.name', 'Moldovacenter.store') }}</title>
    <link rel="stylesheet" href="{{ mix('css/app.css') }}">
    @yield('customcss')
</head>

<body>
    @yield('body')
    <script src="{{ mix('js/app.js') }}"></script>
    @yield('customjs')
</body>

</html>
