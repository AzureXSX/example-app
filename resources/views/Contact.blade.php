@extends('layouts.app')

@section('title-block')
Contact
@endsection

@section('myCss')
    @vite(['resources/scss/app.scss'])
@endsection

@section('content')


@if($errors->any())
<div class="alert alert-danger">
    <ul>
        @foreach($errors->all() as $error)
        <li>{{$error}}</li>
        @endforeach
    </ul>
</div>

@endif

<div class="main-div-x">
    <form id="input-form-x">

        <div class="div-hor-x">
            <div class="img-x" id="bg-x-img" onclick="SelectImg()"></div>
            <input name="img" class="pseudo-img-input" id="img-input-x" type="file" accept="image/png, image/gif, image/jpeg"/>
        </div>

        <div class="div-hor-x">
            <input required type="text" autocomplete="off" name="name" placeholder="" id="name" />
            <label
            for="name"
            style="--m-top: 1.77rem; --m-top-x: -0rem; --m-left: -13.4rem;--m-left-x: -15.4rem;"
            class="placeholder-x"
            >Enter name</label
            >
        </div>

        <div class="div-hor-x">
            <input required type="text" autocomplete="off" name="email" placeholder="" id="email" />
            <label
            for="email"
            style="--m-top: 1.77rem; --m-top-x: -0rem; --m-left: -13.4rem;--m-left-x: -15.4rem;"
            class="placeholder-x"
            >Enter email</label
            >
        </div>

        <div class="div-hor-x">
            <input type="submit" value="Send"/>
        </div>
        
    </form>
</div>



@endsection


@section('myjsfile')
    @vite(['resources/web/js/xxx.js'])
@endsection
