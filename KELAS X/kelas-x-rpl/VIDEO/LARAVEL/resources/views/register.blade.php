@extends('front')

@section('content')
    <div class="row">
        <div class="col-6">
            <form action="{{ url('/postregister') }}" method="post">
                @csrf
                <div class="mt-2">
                    <label for="" class="form-label">Pelanggan</label>
                    <input class="form-control" type="text" name="pelanggan" id="" value="{{ old('pelanggan') }}">
                    <span class="text-danger">
                        @error('pelanggan')
                            {{ $message }}
                        @enderror
                    </span>
                </div>
                <div class="mt-2">
                    <label for="" class="form-label">Alamat</label>
                    <input class="form-control" type="text" name="alamat" id="" value="{{ old('alamat') }}">
                    <span class="text-danger">
                        @error('alamat')
                            {{ $message }}
                        @enderror
                    </span>
                </div>
                <div class="mt-2">
                    <label for="" class="form-label">Telp</label>
                    <input class="form-control" type="number" name="telp" id="" value="{{ old('telp') }}">
                    <span class="text-danger">
                        @error('telp')
                            {{ $message }}
                        @enderror
                    </span>
                </div>
                <div class="mt-2">
                    <label class="form-label" for="">Jenis Kelamin</label>
                    <select name="jeniskelamin" class="form-select" id="">
                        <option value="L">L</option>
                        <option value="P">P</option>
                    </select>
                    <span class="text-danger">
                        @error('jeniskelamin')
                            {{ $message }}
                        @enderror
                    </span>
                </div>
                <div class="mt-2">
                    <label for="" class="form-label">Email</label>
                    <input class="form-control" type="email" name="email" id="" value="{{ old('email') }}">
                    <span class="text-danger">
                        @error('email')
                            {{ $message }}
                        @enderror
                    </span>
                </div>
                <div class="mt-2">
                    <label class="form-label" for="">Password</label>
                    <input class="form-control" type="password" name="password" id="" value="{{ old('password') }}">
                    <span class="text-danger">
                        @error('password')
                            {{ $message }}
                        @enderror
                    </span>
                </div>
                <div class="mt-4">
                    <button type="submit" class="btn btn-primary">Register</button>
                </div>
            </form>
        </div>
    </div>
@endsection
