document.addEventListener('DOMContentLoaded', function() {
    let studyCounter = 1;
    let jobCounter = 1;
    let certificateCounter = 1;
    let awardCounter = 1;
    let organizationCounter = 1;
    let schoolCounter = 1;

    const pendidikanContainer = document.getElementById('pendidikan-container');
    const tambahPendidikanButton = document.getElementById('tambah-pendidikan');
    const jobContainer = document.getElementById('job-container');
    const tambahPekerjaanButton = document.getElementById('tambah-pekerjaan');
    const certificateContainer = document.getElementById('certificate-container');
    const tambahSertifikatButton = document.getElementById('tambah-sertifikasi');
    const awardContainer = document.getElementById('award-container');
    const tambahPenghargaanButton = document.getElementById('tambah-penghargaan');
    const organizationContainer = document.getElementById('organization-container');
    const tambahOrganisasiButton = document.getElementById('tambah-organisasi');
    const studyContainer = document.getElementById('study-container');
    const tambahStudyButton = document.getElementById('tambah-study');

    // Fungsi untuk menambahkan form baru
    tambahPendidikanButton.addEventListener('click', function() {
        studyCounter++; // Tambah counter untuk ID unik

        // Membuat div baru untuk form pendidikan
        const newForm = document.createElement('div');
        newForm.classList.add('pendidikan-form', 'flex', 'flex-col', 'mb-3', 'border', 'p-2',
            'rounded-lg', 'border', 'border-blue-600');
        newForm.id = `pendidikan-${studyCounter}`;

        // Isi HTML dari form baru (duplicate dari form awal)
        newForm.innerHTML = `
                        <button type="button" data-id="${studyCounter}" id="hapus-button" class="text-red-700 hover:text-white border border-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mb-3">Hapus</button>
                        <div class="mb-3">
                            <label for="pendidikan_school_name-${studyCounter}" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Nama Sekolah/Universitas</label>
                            <input type="text" id="pendidikan_school_name-${studyCounter}" name="pendidikan_school_name[]" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" required />
                        </div>
                        <div class="grid gap-6 mb-3 md:grid-cols-3">
                            <div>
                                <label for="pendidikan_year_start-${studyCounter}" class="mb-2 text-sm font-medium text-gray-900 dark:text-white">Tahun Mulai</label>
                                <input type="text" id="pendidikan_year_start-${studyCounter}" name="pendidikan_year_start[]" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 w-full p-2.5" required />
                            </div>
                            <div>
                                <label for="pendidikan_year_end-${studyCounter}" class="mb-2 text-sm font-medium text-gray-900 dark:text-white">Tahun Selesai</label>
                                <input type="text" id="pendidikan_year_end-${studyCounter}" name="pendidikan_year_end[]" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 w-full p-2.5" required />
                            </div>
                            <div>
                                <label for="pendidikan_location-${studyCounter}" class="mb-2 text-sm font-medium text-gray-900 dark:text-white">Lokasi</label>
                                <input type="text" id="pendidikan_location-${studyCounter}" name="pendidikan_location[]" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 w-full p-2.5" required />
                            </div>
                        </div>
                        <div class="grid gap-6 mb-3 md:grid-cols-2">
                            <div>
                                <label for="pendidikan_education_level-${studyCounter}"
                                    class="mb-2 text-sm font-medium text-gray-900 dark:text-white">Tingkat
                                    Pendidikan
                                    <span class="text-red-500">*</span></label>
                                <select id="pendidikan_education_level-${studyCounter}" name="pendidikan_education_level[]"
                                    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                                    <option selected>-- Pilih Tingkat Pendidikan --</option>
                                    <option value="smp">SMP</option>
                                    <option value="sma">SMA</option>
                                    <option value="s1">Sarjana</option>
                                    <option value="s2">Magister</option>
                                    <option value="s3">Magister</option>
                                </select>
                            </div>
                            <div>
                                <label for="pendidikan_study_program-${studyCounter}"
                                    class="mb-2 text-sm font-medium text-gray-900 dark:text-white">Program
                                    Studi
                                    <span class="text-red-500">*</span></label>
                                <input type="text" id="pendidikan_study_program-${studyCounter}" name="pendidikan_study_program[]"
                                    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                    required oninvalid="this.setCustomValidity('Wajib Diisi')"
                                    oninput="this.setCustomValidity('')" />
                            </div>
                        </div>
                        <div class="grid gap-6 mb-3 md:grid-cols-2">
                            <div>
                                <label for="pendidikan_gpa-${studyCounter}"
                                    class="mb-2 text-sm font-medium text-gray-900 dark:text-white">IPK
                                    (Opsional,
                                    lebih
                                    baik dimasukkan)</label>
                                <input type="text" id="pendidikan_gpa-${studyCounter}" name="pendidikan_gpa[]"
                                    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                    required oninvalid="this.setCustomValidity('Wajib Diisi')"
                                    oninput="this.setCustomValidity('')" />
                            </div>
                            <div>
                                <label for="pendidikan_max_gpa-${studyCounter}"
                                    class="mb-2 text-sm font-medium text-gray-900 dark:text-white">IPK
                                    Maksimal</label>
                                <input type="text" id="pendidikan_max_gpa-${studyCounter}" name="pendidikan_max_gpa[]"
                                    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                    required oninvalid="this.setCustomValidity('Wajib Diisi')"
                                    oninput="this.setCustomValidity('')" />
                            </div>
                        </div>
                        <div id="description-container-${studyCounter}" class="mb-3 flex flex-col">
                            <label for="pendidikan_description-${studyCounter}"
                                class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Deskripsi
                                <span class="text-red-500">*</span></label>
                            <small class="mb-2">Jelaskan prestasi, kontribusi, atau proyek penelitian kamu
                                selama
                                pendidikan.</small>
                            <textarea name="pendidikan_description[]" id="pendidikan_description-${studyCounter}" cols="30" rows="10"></textarea>
                        </div>
                        `;

        // Menambahkan form baru ke dalam container
        pendidikanContainer.appendChild(newForm);

        ClassicEditor
            .create(document.getElementById(`pendidikan_description-${studyCounter}`), {
                toolbar: ["bold", "italic'", "bulletedList", "numberedList", "undo", "redo"],
            })
            .then(editor => {
                console.log("Editor was initialized", editor);
            })
            .catch(error => {
                console.error("Error during initialization of the editor", error);
            });

        // Tambahkan event listener untuk tombol hapus
        const hapusButton = newForm.querySelector('#hapus-button');
        hapusButton.addEventListener('click', function() {
            const id = hapusButton.getAttribute('data-id');
            const formToDelete = document.getElementById(`pendidikan-${id}`);
            formToDelete.remove();
        });
    });

    tambahPekerjaanButton.addEventListener('click', function() {
        jobCounter++;

        // Membuat div baru untuk form pendidikan
        const newForm = document.createElement('div');
        newForm.classList.add('pekerjaan-form', 'flex', 'flex-col', 'mb-3', 'border', 'p-2',
            'rounded-lg', 'border', 'border-blue-600');
        newForm.id = `job-${jobCounter}`;

        newForm.innerHTML = `
        <button id="job-hapus-button" data-id="${jobCounter}" type="button"
            class="text-red-700 hover:text-white border border-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mb-2 dark:border-red-500 dark:text-red-500 dark:hover:text-white dark:hover:bg-red-600 dark:focus:ring-red-900">Hapus</button>
        <div class="mb-3">
            <label for="job_name-${jobCounter}"
                class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Nama
                Instansi <span class="text-red-500">*</span></label>
            <input type="text" id="job_name-${jobCounter}" name="job_name[]"
                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                required oninvalid="this.setCustomValidity('Wajib Diisi')"
                oninput="this.setCustomValidity('')" />
        </div>
        <div class="grid gap-6 mb-3 md:grid-cols-2">
            <div>
                <label for="job_position-${jobCounter}"
                    class="mb-2 text-sm font-medium text-gray-900 dark:text-white">Jabatan/Bidang
                    <span class="text-red-500">*</span></label>
                <input type="text" id="job_position-${jobCounter}" name="job_position[]"
                    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    required oninvalid="this.setCustomValidity('Wajib Diisi')"
                    oninput="this.setCustomValidity('')" />
            </div>
            <div>
                <label for="job_employment_level-${jobCounter}"
                    class="mb-2 text-sm font-medium text-gray-900 dark:text-white">Status
                    Karyawan
                    <span class="text-red-500">*</span></label>
                <select id="job_employment_level-${jobCounter}" name="job_employment_level[]"
                    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                    <option selected>-- Pilih Status Karyawan --</option>
                    <option value="fulltime">Fulltime</option>
                    <option value="contract">Kontrak</option>
                    <option value="intern">Magang</option>
                    <option value="freelance">Freelance</option>
                </select>
            </div>
        </div>
        <div class="grid gap-6 mb-3 md:grid-cols-3">
            <div>
                <label for="job_start-${jobCounter}"
                    class="mb-2 text-sm font-medium text-gray-900 dark:text-white">Mulai
                    <span class="text-red-500">*</span></label>
                <input type="date" id="job_start-${jobCounter}" name="job_start[]"
                    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    required oninvalid="this.setCustomValidity('Wajib Diisi')"
                    oninput="this.setCustomValidity('')" />
            </div>
            <div>
                <label for="job_end-${jobCounter}"
                    class="mb-2 text-sm font-medium text-gray-900 dark:text-white">Selesai
                    <span class="text-red-500">*</span></label>
                <input type="date" id="job_end-${jobCounter}" name="job_end[]"
                    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    required oninvalid="this.setCustomValidity('Wajib Diisi')"
                    oninput="this.setCustomValidity('')" />
            </div>
            <div>
                <label for="job_location-${jobCounter}"
                    class="mb-2 text-sm font-medium text-gray-900 dark:text-white">Lokasi <span
                        class="text-red-500">*</span></label>
                <input type="text" id="job_location-${jobCounter}" name="job_location[]"
                    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    required oninvalid="this.setCustomValidity('Wajib Diisi')"
                    oninput="this.setCustomValidity('')" />
            </div>
        </div>
        <div class="mb-3 flex flex-col">
            <label for="job_description-${jobCounter}"
                class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Deskripsi
                <span class="text-red-500">*</span></label>
            <small class="mb-2">Jelaskan hal yang kamu lakukan selama bekerja. Jelaskan
                pencapaian kerjamu dengan angka agar lebih realistis</small>
            <textarea name="job_description[]" id="job_description-${jobCounter}" cols="30" rows="10"></textarea>
        </div>
        `;

        jobContainer.appendChild(newForm);

        ClassicEditor
            .create(document.getElementById(`job_description-${jobCounter}`), {
                toolbar: ["bold", "italic'", "bulletedList", "numberedList", "undo", "redo"],
            })
            .then(editor => {
                console.log("Editor was initialized", editor);
            })
            .catch(error => {
                console.error("Error during initialization of the editor", error);
            });

        // Tambahkan event listener untuk tombol hapus
        const jobHapusButton = newForm.querySelector('#job-hapus-button');
        jobHapusButton.addEventListener('click', function() {
            const id = jobHapusButton.getAttribute('data-id');
            const formToDelete = document.getElementById(`job-${id}`);
            formToDelete.remove();
        });
    });

    tambahSertifikatButton.addEventListener('click', function() {
        certificateCounter++;

        const newForm = document.createElement('div');
        newForm.classList.add('certificate-form', 'flex', 'flex-col', 'mb-3', 'border', 'p-2',
            'rounded-lg', 'border', 'border-blue-600');
        newForm.id = `certificate-${certificateCounter}`;

        newForm.innerHTML = `
        <button id="certificate-hapus-button" data-id="${certificateCounter}" type="button"
            class="text-red-700 hover:text-white border border-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mb-2 dark:border-red-500 dark:text-red-500 dark:hover:text-white dark:hover:bg-red-600 dark:focus:ring-red-900">Hapus</button>

        <div class="grid gap-6 mb-3 md:grid-cols-2">
            <div>
                <label for="certificate_name-${certificateCounter}"
                    class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Nama
                    Sertifikasi/Lisensi <span class="text-red-500">*</span></label>
                <input type="text" id="certificate_name-${certificateCounter}" name="certificate_name[]"
                    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    required oninvalid="this.setCustomValidity('Wajib Diisi')"
                    oninput="this.setCustomValidity('')" />
            </div>
            <div>
                <label for="certificate_publisher-${certificateCounter}"
                    class="mb-2 text-sm font-medium text-gray-900 dark:text-white">Penerbit
                    Sertifikasi/Lisensi
                    <span class="text-red-500">*</span></label>
                <input type="text" id="certificate_publisher-${certificateCounter}"
                    name="certificate_publisher[]"
                    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    required oninvalid="this.setCustomValidity('Wajib Diisi')"
                    oninput="this.setCustomValidity('')" />
            </div>
        </div>
        <div class="grid gap-6 mb-3 md:grid-cols-2">
            <div>
                <label for="certificate_id-${certificateCounter}"
                    class="mb-2 text-sm font-medium text-gray-900 dark:text-white">Nomor
                    Sertifikasi/Lisensi
                    <span class="text-red-500">*</span></label>
                <input type="text" id="certificate_id-${certificateCounter}" name="certificate_id[]"
                    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    required oninvalid="this.setCustomValidity('Wajib Diisi')"
                    oninput="this.setCustomValidity('')" />
            </div>
            <div>
                <label for="certificate_year-${certificateCounter}"
                    class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Tahun
                    Sertifikasi <span class="text-red-500">*</span></label>
                <input type="text" id="certificate_year-${certificateCounter}" name="certificate_year[]"
                    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    required oninvalid="this.setCustomValidity('Wajib Diisi')"
                    oninput="this.setCustomValidity('')" />
            </div>
        </div>
        `;

        certificateContainer.appendChild(newForm);

        // Tambahkan event listener untuk tombol hapus
        const hapusButton = newForm.querySelector('#certificate-hapus-button');
        hapusButton.addEventListener('click', function() {
            const id = hapusButton.getAttribute('data-id');
            const formToDelete = document.getElementById(`certificate-${id}`);
            formToDelete.remove();
        });
    });

    tambahPenghargaanButton.addEventListener('click', function() {
        awardCounter++; // Tambah counter untuk ID unik

        // Membuat div baru untuk form pendidikan
        const newForm = document.createElement('div');
        newForm.classList.add('penghargaan-form', 'flex', 'flex-col', 'mb-3', 'border', 'p-2',
            'rounded-lg', 'border', 'border-blue-600');
        newForm.id = `award-${awardCounter}`;

        // Isi HTML dari form baru (duplicate dari form awal)
        newForm.innerHTML = `
            <button id="award-hapus-button" data-id="${awardCounter}" type="button"
                class="text-red-700 hover:text-white border border-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mb-2 dark:border-red-500 dark:text-red-500 dark:hover:text-white dark:hover:bg-red-600 dark:focus:ring-red-900">Hapus</button>

            <div class="grid gap-6 mb-3 md:grid-cols-2">
                <div>
                    <label for="award_name-${awardCounter}"
                        class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Nama
                        Penghargaan <span class="text-red-500">*</span></label>
                    <input type="text" id="award_name-${awardCounter}" name="award_name[]"
                        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        required oninvalid="this.setCustomValidity('Wajib Diisi')"
                        oninput="this.setCustomValidity('')" />
                </div>
                <div>
                    <label for="award_publisher-${awardCounter}"
                        class="mb-2 text-sm font-medium text-gray-900 dark:text-white">Pemberi
                        Penghargaan
                        <span class="text-red-500">*</span></label>
                    <input type="text" id="award_publisher-${awardCounter}" name="award_publisher[]"
                        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        required oninvalid="this.setCustomValidity('Wajib Diisi')"
                        oninput="this.setCustomValidity('')" />
                </div>
            </div>
            <div class="mb-3">
                <label for="award_year-${awardCounter}"
                    class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Tahun
                    Penerimaan <span class="text-red-500">*</span></label>
                <input type="text" id="award_year-${awardCounter}" name="award_year[]"
                    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    required oninvalid="this.setCustomValidity('Wajib Diisi')"
                    oninput="this.setCustomValidity('')" />
            </div>
        `;

        awardContainer.appendChild(newForm);

        // Tambahkan event listener untuk tombol hapus
        const hapusButton = newForm.querySelector('#award-hapus-button');
        hapusButton.addEventListener('click', function() {
            const id = hapusButton.getAttribute('data-id');
            const formToDelete = document.getElementById(`award-${id}`);
            formToDelete.remove();
        });

    });

    tambahOrganisasiButton.addEventListener('click', function() {
        organizationCounter++; // Tambah counter untuk ID unik

        // Membuat div baru untuk form pendidikan
        const newForm = document.createElement('div');
        newForm.classList.add('organization-form', 'flex', 'flex-col', 'mb-3', 'border', 'p-2',
            'rounded-lg', 'border', 'border-blue-600');
        newForm.id = `organization-${organizationCounter}`;

        // Isi HTML dari form baru (duplicate dari form awal)
        newForm.innerHTML = `
            <button id="organization-hapus-button" data-id="${organizationCounter}" type="button"
                class="text-red-700 hover:text-white border border-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mb-2 dark:border-red-500 dark:text-red-500 dark:hover:text-white dark:hover:bg-red-600 dark:focus:ring-red-900">Hapus</button>
            <div class="grid gap-6 mb-3 md:grid-cols-2">
                <div>
                    <label for="organization_position-${organizationCounter}"
                        class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Jabatan/Bidang
                        <span class="text-red-500">*</span></label>
                    <input type="text" id="organization_position-${organizationCounter}"
                        name="organization_position[]"
                        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        oninvalid="this.setCustomValidity('Wajib Diisi')"
                        oninput="this.setCustomValidity('')" />
                </div>
                <div>
                    <label for="organization_name-${organizationCounter}"
                        class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Nama
                        Instansi
                        <span class="text-red-500">*</span></label>
                    <input type="text" id="organization_name-${organizationCounter}" name="organization_name[]"
                        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        oninvalid="this.setCustomValidity('Wajib Diisi')"
                        oninput="this.setCustomValidity('')" />
                </div>
            </div>
            <div class="grid gap-6 mb-3 md:grid-cols-3">
                <div>
                    <label for="organization_start-${organizationCounter}"
                        class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Tahun
                        Mulai
                        <span class="text-red-500">*</span></label>
                    <input type="text" id="organization_start-${organizationCounter}" name="organization_start[]"
                        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        oninvalid="this.setCustomValidity('Wajib Diisi')"
                        oninput="this.setCustomValidity('')" />
                </div>
                <div>
                    <label for="organization_end-${organizationCounter}"
                        class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Tahun
                        Selesai
                        <span class="text-red-500">*</span></label>
                    <input type="text" id="organization_end-${organizationCounter}" name="organization_end[]"
                        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        oninvalid="this.setCustomValidity('Wajib Diisi')"
                        oninput="this.setCustomValidity('')" />
                </div>
                <div>
                    <label for="organization_location-${organizationCounter}"
                        class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Lokasi
                        <span class="text-red-500">*</span></label>
                    <input type="text" id="organization_location-${organizationCounter}"
                        name="organization_location[]"
                        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        required oninvalid="this.setCustomValidity('Wajib Diisi')"
                        oninput="this.setCustomValidity('')" />
                </div>
            </div>
            <div class="mb-3 flex flex-col gap-2">
                <label for="organization_description-${organizationCounter}"
                    class="block text-sm font-medium text-gray-900 dark:text-white">Deskripsi
                    <span class="text-red-500">*</span></label>
                <small>Jelaskan peran, prestasi, dan kontribusimu selama di organisasi! Jelaskan
                    keberhasilanmu dengan angka agar lebih realistis</small>
                <textarea id="organization_description-${organizationCounter}" name="organization_description[]" rows="4"></textarea>
            </div>
        `;

        // Tambahkan form baru ke div
        organizationContainer.appendChild(newForm);
        ClassicEditor
        .create(document.getElementById(`organization_description-${organizationCounter}`), {
            toolbar: ['bold', 'italic', 'bulletedList', 'numberedList', 'undo', 'redo'],
        })
        .then(editor => {
            console.log('Editor was initialized', editor);
        })
        .catch(error => {
            console.error('Error during initialization of the editor', error);
        });

        // Tambahkan event listener untuk tombol hapus
        const hapusButton = newForm.querySelector('#organization-hapus-button');
        hapusButton.addEventListener('click', function() {
            const id = hapusButton.getAttribute('data-id');
            const formToDelete = document.getElementById(`organization-${id}`);
            formToDelete.remove();
        });
    });

    tambahStudyButton.addEventListener('click', function() {
        schoolCounter++;
        const newForm = document.createElement('div');
        newForm.classList.add('pendidikan-form', 'flex', 'flex-col', 'mb-3', 'border', 'p-2',
            'rounded-lg', 'border', 'border-blue-600');
        newForm.id = `study-${schoolCounter}`;

        // Isi HTML dari form baru (duplicate dari form awal)
        newForm.innerHTML = `
            <button id="study-hapus-button" data-id="${schoolCounter}" type="button"
                class="text-red-700 hover:text-white border border-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mb-2 dark:border-red-500 dark:text-red-500 dark:hover:text-white dark:hover:bg-red-600 dark:focus:ring-red-900">Hapus</button>
            <div class="grid gap-6 mb-3 md:grid-cols-2">
                <div>
                    <label for="study_name-${schoolCounter}"
                        class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Nama
                        Kegiatan
                        <span class="text-red-500">*</span></label>
                    <input type="text" id="study_name-${schoolCounter}" name="study_name[]"
                        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        oninvalid="this.setCustomValidity('Wajib Diisi')"
                        oninput="this.setCustomValidity('')" />
                </div>
                <div>
                    <label for="study_organizer_name-${schoolCounter}"
                        class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Penyelenggara
                        <span class="text-red-500">*</span></label>
                    <input type="text" id="study_organizer_name-${schoolCounter}" name="study_organizer_name[]"
                        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        oninvalid="this.setCustomValidity('Wajib Diisi')"
                        oninput="this.setCustomValidity('')" />
                </div>
            </div>
            <div class="grid gap-6 mb-3 md:grid-cols-3">
                <div>
                    <label for="study_start-${schoolCounter}"
                        class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Tahun
                        Mulai
                        <span class="text-red-500">*</span></label>
                    <input type="text" id="study_start-${schoolCounter}" name="study_start[]"
                        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        oninvalid="this.setCustomValidity('Wajib Diisi')"
                        oninput="this.setCustomValidity('')" />
                </div>
                <div>
                    <label for="study_end-${schoolCounter}"
                        class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Tahun
                        Selesai
                        <span class="text-red-500">*</span></label>
                    <input type="text" id="study_end-${schoolCounter}" name="study_end[]"
                        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        oninvalid="this.setCustomValidity('Wajib Diisi')"
                        oninput="this.setCustomValidity('')" />
                </div>
                <div>
                    <label for="study_location-${schoolCounter}"
                        class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Lokasi
                        <span class="text-red-500">*</span></label>
                    <input type="text" id="study_location-${schoolCounter}" name="study_location[]"
                        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        oninvalid="this.setCustomValidity('Wajib Diisi')"
                        oninput="this.setCustomValidity('')" />
                </div>
            </div>
            <div class="mb-3 flex flex-col gap-2">
                <label for="study_description-${schoolCounter}"
                    class="block text-sm font-medium text-gray-900 dark:text-white">Deskripsi
                    <span class="text-red-500">*</span></label>
                <small>Jelaskan kegiatan yang kamu ikuti dan pencapaian setelah mengikuti kegiatan tersebut.</small>
                <textarea id="study_description-${schoolCounter}" name="study_description[]" rows="4"></textarea>
            </div>
        `;

        // Tambahkan form baru ke div
        studyContainer.appendChild(newForm);
        ClassicEditor
        .create(document.getElementById(`study_description-${schoolCounter}`), {
            toolbar: ['bold', 'italic', 'bulletedList', 'numberedList', 'undo', 'redo'],
        })
        .then(editor => {
            console.log('Editor was initialized', editor);
        })
        .catch(error => {
            console.error('Error during initialization of the editor', error);
        });
        
        // Tambahkan event listener untuk tombol hapus
        const hapusButton = newForm.querySelector('#study-hapus-button');
        hapusButton.addEventListener('click', function() {
            const id = hapusButton.getAttribute('data-id');
            const formToDelete = document.getElementById(`study-${id}`);
            formToDelete.remove();
        });
    });
});