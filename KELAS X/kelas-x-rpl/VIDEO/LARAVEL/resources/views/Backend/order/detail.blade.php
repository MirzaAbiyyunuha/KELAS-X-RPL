@extends('Backend.back')

@section('admincontent')
    <div>
        <h1>Detail Order</h1>
    </div>
    <div class="row">
        <div class="col-6">
            <h3>Informasi Order</h3>
            <table class="table table-bordered">
                <tr>
                    <th>ID Order</th>
                    <td>{{ $order->idorder }}</td>
                </tr>
                <tr>
                    <th>Pelanggan</th>
                    <td>{{ $order->pelanggan->nama ?? 'N/A' }}</td>
                </tr>
                <tr>
                    <th>Tanggal Order</th>
                    <td>{{ $order->tglorder }}</td>
                </tr>
                <tr>
                    <th>Total</th>
                    <td>{{ number_format($order->total) }}</td>
                </tr>
                <tr>
                    <th>Bayar</th>
                    <td>{{ number_format($order->bayar) }}</td>
                </tr>
                <tr>
                    <th>Kembali</th>
                    <td>{{ number_format($order->kembali) }}</td>
                </tr>
                <tr>
                    <th>Status</th>
                    <td>{{ $order->status == 1 ? 'Lunas' : 'Belum Bayar' }}</td>
                </tr>
            </table>
        </div>
    </div>
    <div class="mt-4">
        <h3>Detail Item</h3>
        <table class="table table-bordered">
            <thead>
                <tr>
                    <th>No</th>
                    <th>Menu</th>
                    <th>Jumlah</th>
                    <th>Harga Jual</th>
                    <th>Subtotal</th>
                </tr>
            </thead>
            <tbody>
                @php $no = 1; @endphp
                @foreach ($order->orderDetails as $detail)
                    <tr>
                        <td>{{ $no++ }}</td>
                        <td>{{ $detail->menu->nama ?? 'N/A' }}</td>
                        <td>{{ $detail->jumlah }}</td>
                        <td>{{ number_format($detail->hargajual) }}</td>
                        <td>{{ number_format($detail->jumlah * $detail->hargajual) }}</td>
                    </tr>
                @endforeach
            </tbody>
        </table>
    </div>
    <div class="mt-3">
        <a href="{{ route(Auth::user()->level == 'kasir' ? 'kasir.order.index' : 'manager.order.index') }}"
            class="btn btn-secondary">Kembali</a>
    </div>
@endsection
