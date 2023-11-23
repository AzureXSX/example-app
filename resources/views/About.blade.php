@extends('layouts.app')

@section('title-block')
About
@endsection

@section('myCss')
    @vite(['resources/scss/app.scss'])
@endsection


@section('content')

<div class="main-div-x" style="padding-bottom: 1.5rem; background-color: #171c27;color: aqua; border-color: aqua;">
    <div class="div-hor-x">
        <div class="img-x" id="bg-x-img"></div>
    </div>

    <div class="div-hor-x" style="justify-content: start">
        <label class="label-x">User: </label>
    </div>

    <div class="div-hor-x" style="justify-content: start">
        <label class="label-x">Email: </label>
    </div>

</div>

@endsection

@section('myjsfile')
    @vite(['resources/web/js/xux.js'])
@endsection