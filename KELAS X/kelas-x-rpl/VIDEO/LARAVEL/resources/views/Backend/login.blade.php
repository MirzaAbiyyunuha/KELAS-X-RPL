<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
    <link rel="stylesheet" href="{{ asset('bootstrap\bootstrap-5.3.8-dist\css\bootstrap.min.css') }}">
</head>

<body>

    <div class="container">
        <div class="row justify-content-center mt-5">

            <div class="col-4">
                <h1 class="text-center">
                    Login Admin
                </h1>
                <form action="{{ url('admin/postlogin') }}" method="post">
                    @csrf

                    @if (Session::has('pesan'))
                        <div class="alert alert-danger">
                            {{ Session::get('pesan') }}
                        </div>
                    @endif
                    <div class="mt-2">
                        <label for="" class="form-label">Email</label>
                        <input class="form-control" type="email" name="email" id=""
                            value="{{ old('email') }}">
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
    </div>

    <script src="{{ asset('bootstrap\bootstrap-5.3.8-dist\js\bootstrap.min.js') }}"></script>
</body>

</html>
