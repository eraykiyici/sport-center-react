# Sport Center React (Spor Merkezi) Projesi

Bu proje, daha önce statik HTML, CSS ve JavaScript ile oluşturulmuş bir spor merkezi web sitesinin **React** kütüphanesi kullanılarak yeniden yapılandırılmış halidir. Proje, her bir bölümün ayrı bir component (bileşen) olarak ele alındığı, modüler ve dinamik bir yapıya sahiptir.

🌐 Canlı Demo
Projenin canlı demosuna aşağıdaki linkten ulaşabilirsiniz:

[Siteye Gitmek İçin](https://curious-squirrel-8761e9.netlify.app/)

🚀 Özellikler
Bu projede aşağıdaki işlevler bulunmaktadır:

* **Bileşen Tabanlı Mimari (Component-Based):** Proje, React'in modüler yapısına uygun olarak `Navbar`, `HeroSection`, `ClassesSection`, `BmiCalculator` gibi birçok alt bileşene ayrılmıştır.
* **Dinamik State Yönetimi:** Orijinal JavaScript dosyasındaki statik işlevler, React Hooks (`useState`, `useEffect`) kullanılarak yeniden yazılmıştır.
* **Etkileşimli BMI Hesaplayıcı:** Kullanıcının girdiği boy ve kilo verilerine anlık tepki vererek `useState` ve `useEffect` hook'ları ile BMI (Vücut Kitle İndeksi) hesaplar ve göstergeyi dinamik olarak hareket ettirir.
* **Dinamik Sekmeler (Tabs):** "Our Classes" bölümü, `useState` hook'u ile hangi sekmenin (Yoga, Group, Solo vb.) aktif olduğunu takip eder ve ilgili içeriği anında gösterir.
* **Scroll Efektli Navbar:** Sayfa kaydırıldığında `useEffect` hook'u ile scroll pozisyonu dinlenir ve `Navbar`'ın görünümü (arka plan rengi) dinamik olarak değiştirilir.
* **Responsive (Duyarlı) Tasarım:** Bootstrap 5 grid sistemi ve özel CSS kullanılarak sitenin farklı ekran boyutlarına (mobil, tablet, masaüstü) tam uyum sağlaması korunmuştur.

🛠️ Kullanılan Teknolojiler
* **React:** Projenin temelini oluşturan modern JavaScript kütüphanesi.
* **React Hooks:**
    * `useState`: Bileşenlerin yerel durumunu (BMI değerleri, aktif sekme) yönetmek için.
    * `useEffect`: Yan etkileri (scroll dinleyicisi, BMI hesaplaması) yönetmek için.
* **HTML5 & JSX:** Bileşenlerin yapısını ve iskeletini oluşturmak için.
* **CSS3:** Bileşenlere özel stillendirmeler, `hover` efektleri ve `trainer-card` animasyonları.
* **Bootstrap 5:**
    * Genel tasarım, duyarlı grid (ızgara) yapısı.
    * Butonlar, formlar ve kart yapıları.
* **Netlify:** Projenin canlıya alınması (deployment) ve barındırılması.