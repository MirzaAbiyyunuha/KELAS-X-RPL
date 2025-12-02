@extends('front')

@section('content')
    <div class="row">
        <div class="col-6">
            <form action="{{ url('/postlogin') }}" method="post">
                @csrf

                @if (Session::has('pesan'))
                    <div class="alert alert-danger">
                        {{ Session::get('pesan') }}
                    </div>
                @endif
                <div class="mt-2">
                    <label for="" class="form-label">Email</label>
                    <input class="form-control" type="email" name="email" id="" value="{{ old('email') }}">
                </div>
                <div class="mt-2">
                    <label class="form-label" for="">Password</label>
                    <input class="form-control" type="password" name="password" id=""
                        value="{{ old('password') }}">
                </div>
                <div class="mt-4">
                    <button type="submit" class="btn btn-primary">Login</button>
                </div>
            </form>
        </div>
    </div>
@endsection
