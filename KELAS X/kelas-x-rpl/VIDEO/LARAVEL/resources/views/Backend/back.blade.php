<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Admin page aplikasi restoran smk</title>
    <link rel="stylesheet" href="{{ asset('bootstrap\bootstrap-5.3.8-dist\css\bootstrap.min.css') }}">
</head>

<body>
    <div class="container">
        <div class="mt-4">
            <nav class="navbar navbar-expand-lg bg-light">
                <div class="container-fluid">
                    <h2>Admin page</h2>
                    <ul class="navbar-nav me-5 gap-4">
                        <li class="nav-item">{{ Auth::user()->email }}</li>
                        <li class="nav-item">{{ Auth::user()->level }}</li>
                        <li class="nav-item"><a href="{{ url('admin/logout') }}">Logout</a></li>
                    </ul>
                </div>
            </nav>
        </div>

    </div>
    <div class="row mt-4">
        <div class="col-2">
            <ul class="list-group" style="margin-left: 40px; margin-top: 20px;">
                @if (Auth::user()->level == 'admin')
                    <li class="list-group-item"><a href="">User</a></li>
                @endif
                @if (Auth::user()->level == 'kasir')
                    <li class="list-group-item"><a href="{{ url('admin/kasir/order') }}">Order</a></li>
                    <li class="list-group-item"><a href="{{ url('admin/manager/orderdetail') }}">Order detail</a></li>
                @endif
                @if (Auth::user()->level == 'manager')
                    <li class="list-group-item"><a href="{{ url('admin/manager/kategori') }}">Kategori</a></li>
                    <li class="list-group-item"><a href="{{ url('admin/manager/menu') }}">Menu</a></li>
                    <li class="list-group-item"><a href="{{ url('admin/manager/pelanggan') }}">Pelanggan</a></li>
                    <li class="list-group-item"><a href="{{ url('admin/manager/order') }}">Order</a></li>
                    <li class="list-group-item"><a href="{{ url('admin/manager/orderdetail') }}">Order detail</a></li>
                @endif
            </ul>
        </div>
        <div class="col-10">
            @yield('admincontent')
        </div>
    </div>
    <div class="bg-light mt-5">
        <p class="text-center">Copyright &copy; 2024</p>
    </div>

    <script src="{{ asset('bootstrap\bootstrap-5.3.8-dist\js\bootstrap.min.js') }}"></script>
</body>

</html>
