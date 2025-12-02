@extends('front')

@section('content')
    <div class="row">
        @foreach ($menus as $menu)
            <div class="card mx-2 mb-2" style="width: 18rem;">
                <img src="{{ asset('img/' . $menu->gambar) }}" class="card-img-top" alt="...">
                <div class="card-body">
                    <h5 class="card-title">{{ $menu->menu }}</h5>
                    <p class="card-text">{{ $menu->deskripsi }}</p>
                    <h5 class="card-text">{{ $menu->harga }}</h5>
                    <a href="{{ url('beli/' . $menu->idmenu) }}" class="btn btn-primary">Beli</a>

                </div>
            </div>
        @endforeach
        <div class="d-flex mt-5 justify-content-center">
            {{ $menus->links() }}
        </div>
    </div>
@endsection
