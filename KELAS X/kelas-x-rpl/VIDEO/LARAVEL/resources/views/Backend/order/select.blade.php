@extends('Backend.back')

@section('admincontent')
    <div>
        <h1>Order</h1>
    </div>
    <div>
        <table class="table table-bordered" style="width: 1500px">
            <thead>
                <tr>
                    <th>No</th>
                    <th>Pelanggan</th>
                    <th>Total</th>
                    <th>Bayar</th>
                    <th>Kembali</th>
                    <th>Status</th>
                    <th>Detail</th>
                </tr>
            </thead>
            @php
                $no = 1;
            @endphp
            <tbody>
                @foreach ($orders as $order)
                    <tr>
                        <td>{{ $no++ }}</td>
                        <td>{{ $order->pelanggan }}</td>
                        <td>{{ $order->total }}</td>
                        <td>{{ $order->bayar }}</td>
                        <td>{{ $order->kembali }}</td>
                        @php
                            $status = 'Lunas';
                            if ($order->status == 0) {
                                $routeName = Auth::user()->level == 'kasir' ? 'kasir.order.edit' : 'manager.order.edit';
                                $status = '<a href="' . route($routeName, $order->id) . '">Bayar</a>';
                            }
                        @endphp
                        <td>{!! $status !!}</td>
                        <td>
                            <a href="{{ route(Auth::user()->level == 'kasir' ? 'kasir.order.show' : 'manager.order.show', $order->id) }}"
                                class="btn btn-info btn-sm">Detail</a>
                        </td>
                    </tr>
                @endforeach
            </tbody>
        </table>
    </div>
    <div class="d-flex justify-content-center mt-5">
        {{ $orders->withQueryString()->links() }}
    </div>
@endsection
