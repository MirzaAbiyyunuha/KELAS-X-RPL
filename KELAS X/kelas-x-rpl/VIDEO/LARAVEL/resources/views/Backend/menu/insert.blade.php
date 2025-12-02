@extends('Backend.back')

@section('admincontent')
    <div>
        <h2>Insert Data</h2>
    </div>
    <div class="row">
        <div class="col-6">
            <form action="{{ url('admin/menu') }}" method="post" enctype="multipart/form-data">
                @csrf
                <select name="idkategori" id="" class="form-select">
                    @foreach ($kategoris as $kategori)
                        <option value="{{ $kategori->idkategori }}">{{ $kategori->kategori }}</option>
                    @endforeach
                </select>


                <div class="mt-2">
                    <label for="" class="form-label">Menu</label>
                    <input type="text" class="form-control" name="menu">
                    <span class="text-danger">
                        @error('menu')
                            {{ $message }}
                        @enderror
                    </span>
                </div>
                <div class="mt-2">
                    <label for="" class="form-label">Deskripsi</label>
                    <input type="text" class="form-control" name="deskripsi">
                    <span class="text-danger">
                        @error('deskripsi')
                            {{ $message }}
                        @enderror
                    </span>
                </div>
                <div class="mt-2">
                    <label for="" class="form-label">Harga</label>
                    <input type="text" class="form-control" name="harga">
                    <span class="text-danger">
                        @error('menu')
                            {{ $message }}
                        @enderror
                    </span>
                </div>
                <div class="mt-2">
                    <label for="" class="form-label">Gambar</label>
                    <input type="file" class="form-control" name="gambar">
                    <span class="text-danger">
                        @error('gambar')
                            {{ $message }}
                        @enderror
                    </span>
                </div>

                <div class="mt-4">
                    <button class="btn btn-primary" type="submit">Simpan</button>
                </div>
            </form>
        </div>
    </div>
@endsection
