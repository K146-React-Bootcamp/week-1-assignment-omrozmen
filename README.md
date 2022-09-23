## week-1-assignment

# Cookie
Çerezler kullanıcı profili hakkındaki bilgileri hatırlatmak için kullanılır.
Bir kullanıcı bir web sayfasını ziyaret ettiğinde, kullanıcı profili bir çerezde saklanabilir.
Kullanıcının sayfayı bir sonraki ziyaretinde çerez kullanıcı profilini hatırlar.
Varsayılan olarak, çerez geçerli bir sayfaya aittir. Ancak tarayıcıya bir path parametresi kullanarak çerezin hangi yola ait olduğunu söyleyebilirsiniz.
Not: Doğru çerezi sildiğinizden emin olmak için çerez yolu seçeneğini tanımlamanız gerekir. Bazı tarayıcılar, bir path parametresi belirtmediğiniz sürece bir çerezi silmeye izin vermez.
Çerez dosyaları, verilen bilgilerin kaybolmaması için sayfada tutulma işlemidir. Çerez dosyalarının 4kb ile sınırlıdır. Ve üçüncü şahıs kişiler rahatlıkla erişim sağlayabilmektedirler.
# SessionStorage
Session Storage, Local Storage’ın aksine verileri kısıtlı bir süre için depolar. Kullanıcı tarayıcı penceresini kapattığında veriler temizlenecektir. Veriler asla sunucuya gönderilmeyecektir.
## Local Storage
Html5 ile birlikte gelmiş olup verinin yerel depolama veya browser depolaması üzerinden kaydedilmesini sağlamaktadır.Eskiden cookilerle yapılan işlemler bu sayede daha güvenilir ve hızlı bir hale gelmektedir. Bunun sebebi; her sunucu isteminde değil; sadece çağırıldığından yerel depolamalardan çekilmeleridir.
Çerezlerdeki boyut ve erişilebilirlik gibi durumlardan dolayı local storage kullanımı yaygınlaşmaya başlamıştır.
Veriler "key/value" şeklinde ve bitiş tarihi olmadan saklanmaktadır. 
Web sayfaları sadece kendi oluşturdukları verilere erişebilmektedir.
Ancak Local Storage ve Session Storage kullanici tarayicisi üzerinden kolayca okunabilir ve degistirilebilir, bu sebeple uygulamalar içerisindeki güvenlikle ilgili verilerin depolanmasi konusunda asla güvenilmemelidir.
Her ikisinin de kullanici tarafindan silinebilecegine veya degistirilebilecegine dikkat etmelisiniz bu nedenle verilerin devam eden varligina ve varliginin dogruluguna güvenmemelisiniz.
Local Storage ve Session Storage sayfalar arasindaki ve Client islemleri arasindaki hassas olmayan verilerin tasinmasinda gayet kullanislidir.
LocalStorage ve session storage çerez gibi saklanmaktadır. Ve storagelerde boyut sınırlaması(4kb) yoktur. Ve Cookiler httpRequest ile birlikte iletilebilirken Storageler iletilmez.
