@extends('Backend.back')

@section('admincontent')
    <div>
        <h1>Pelanggan</h1>
    </div>
    <div>
        <table class="table table-bordered" style="width: 1500px">
            <thead>
                <tr>
                    <th>No</th>
                    <th>ID Pelanggan</th>
                    <th>Nama</th>
                    <th>Email</th>
                    <th>Alamat</th>
                    <th>Telepon</th>
                    <th>Jenis Kelamin</th>
                </tr>
            </thead>
            @php
                $no = 1;
            @endphp
            <tbody>
                @foreach ($pelanggans as $pelanggan)
                    <tr>
                        <td>{{ $no++ }}</td>
                        <td>{{ $pelanggan->idpelanggan }}</td>
                        <td>{{ $pelanggan->pelanggan }}</td>
                        <td>{{ $pelanggan->email }}</td>
                        <td>{{ $pelanggan->alamat }}</td>
                        <td>{{ $pelanggan->telp }}</td>
                        <td>{{ $pelanggan->jeniskelamin }}</td>
                    </tr>
                @endforeach
            </tbody>
        </table>
    </div>
@endsection
