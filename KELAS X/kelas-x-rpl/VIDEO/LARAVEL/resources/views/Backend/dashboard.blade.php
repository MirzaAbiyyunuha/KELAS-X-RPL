@extends('Backend.back')

@section('admincontent')
    <div>
        <h1>Dashboard Admin</h1>
        <p>Selamat datang di panel admin aplikasi restoran SMK.</p>
        <div class="row mt-4">
            <div class="col-md-4">
                <div class="card">
                    <div class="card-body">
                        <h5 class="card-title">Total Orders</h5>
                        <p class="card-text">{{ \App\Models\Order::count() }}</p>
                    </div>
                </div>
            </div>
            <div class="col-md-4">
                <div class="card">
                    <div class="card-body">
                        <h5 class="card-title">Total Menu</h5>
                        <p class="card-text">{{ \App\Models\Menu::count() }}</p>
                    </div>
                </div>
            </div>
            <div class="col-md-4">
                <div class="card">
                    <div class="card-body">
                        <h5 class="card-title">Total Kategori</h5>
                        <p class="card-text">{{ \App\Models\Kategori::count() }}</p>
                    </div>
                </div>
            </div>
        </div>

        <div class="row mt-4">
            <div class="col-12">
                <div class="card">
                    <div class="card-header">
                        <h5>Recent Orders</h5>
                    </div>
                    <div class="card-body">
                        <table class="table table-striped">
                            <thead>
                                <tr>
                                    <th>ID Order</th>
                                    <th>Pelanggan</th>
                                    <th>Total</th>
                                    <th>Status</th>
                                    <th>Tanggal</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                @foreach (\App\Models\Order::with('pelanggan')->latest()->take(5)->get() as $order)
                                    <tr>
                                        <td>{{ $order->idorder }}</td>
                                        <td>{{ $order->pelanggan->nama ?? 'N/A' }}</td>
                                        <td>{{ number_format($order->total) }}</td>
                                        <td>
                                            @if ($order->status == 0)
                                                <span class="badge bg-warning">Belum Bayar</span>
                                            @else
                                                <span class="badge bg-success">Lunas</span>
                                            @endif
                                        </td>
                                        <td>{{ $order->tglorder }}</td>
                                        <td>
                                            @if (Auth::user()->level == 'kasir' && $order->status == 0)
                                                <a href="{{ route('kasir.order.show', $order->id) }}"
                                                    class="btn btn-sm btn-primary">Bayar</a>
                                            @elseif(Auth::user()->level == 'manager')
                                                <a href="{{ route('manager.order.show', $order->id) }}"
                                                    class="btn btn-sm btn-info">View</a>
                                            @endif
                                        </td>
                                    </tr>
                                @endforeach
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    </div>
@endsection
