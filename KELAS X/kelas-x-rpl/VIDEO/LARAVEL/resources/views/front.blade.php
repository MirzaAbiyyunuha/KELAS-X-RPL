<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Aplikasi restoran smk</title>
    <link rel="stylesheet" href="{{ asset('bootstrap\bootstrap-5.3.8-dist\css\bootstrap.min.css') }}" />
</head>

<body>
    <div class="container">
        <div class="mt-2">
            <nav class="navbar navbar-expand-lg bg-light">
                <div class="container-fluid">
                    <a href="/"><img style="width: 300px" src="{{ asset('img/background.jpg') }}"
                            alt=""></a>
                    <ul class="navbar-nav">

                        @if (session()->has('cart'))
                            <li class="nav-item me-4"> <a href="{{ url('cart') }}"> Cart (
                                    @php
                                        $count = count(session('cart'));
                                        echo $count;
                                    @endphp
                                    )</a> </li>
                        @else
                            <li class="nav-item me-4">Cart</li>
                        @endif

                        @if (session()->missing('idpelanggan'))
                            <li class="nav-item me-4"><a href="{{ url('register') }}">Register</a></li>

                            <li class="nav-item me-4"><a href="{{ url('login') }}">Login</a></li>
                        @endif
                        <li class="nav-item me-4">
                            @if (session()->has('idpelanggan'))
                        <li>{{ session('idpelanggan')['email'] }}</li>
                        <li class="nav-item"><a href="{{ url('logout') }}">Logout</a></li>
                        @endif
                        </li>

                    </ul>
                </div>
            </nav>
        </div>
        <div class="row">
            <div class="col-2">
                <ul class="list-group">
                    @foreach ($kategoris as $kategori)
                        <li class="list-group-item"><a
                                href="{{ url('show/' . $kategori->idkategori) }}">{{ $kategori->kategori }}</a></li>
                    @endforeach

                </ul>
            </div>
            <div class="col-10">
                @yield('content')
            </div>
        </div>
        <div class="bg-light">
            <p>Copyright &copy;bilalalaudin 2026</p>
        </div>

    </div>

    <script src="{{ asset('bootstrap\bootstrap-5.3.8-dist\js\bootstrap.min.js') }}"></script>
</body>

</html>
