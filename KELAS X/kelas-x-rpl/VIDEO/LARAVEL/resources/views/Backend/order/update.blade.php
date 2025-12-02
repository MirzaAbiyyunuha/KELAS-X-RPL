@extends('Backend.back')

@section('admincontent')
    <div class="row">
        <div>
            <h1>{{ number_format($order->total) }}</h1>
        </div>
        <div class="col-6">
            <form
                action="{{ route(Auth::user()->level == 'kasir' ? 'kasir.order.update' : 'manager.order.update', $order->id) }}"
                method="post">
                @csrf
                @method('PUT')
                <div class="mt-2">
                    <label for="" class="form-label">Total</label>
                    <input type="text" class="form-control" id="" name="bayar" min="{{ $order->total }}"
                        value="{{ $order->order }}">
                </div>
                <div class="mt-3">
                    <button type="submit" class="btn btn-primary">Submit</button>
                </div>
            </form>
        </div>
    </div>
@endsection
