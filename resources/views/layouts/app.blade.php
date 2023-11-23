<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="csrf-token" content="{{ csrf_token() }}">
    <title>@yield('title-block')</title>
    @yield('myCss')
</head>

<body>
    @yield('content')
    @yield('myjsfile')
</body>
</html>