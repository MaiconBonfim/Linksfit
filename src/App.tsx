import React from 'react';

function App() {
  return (
    <div className="min-h-screen bg-white flex flex-col items-center px-4 py-8">
      {/* Profile Section */}
      <div className="w-32 h-32 rounded-full overflow-hidden mb-0">
        <img 
          src="/img/logo.png" 
          alt="FitBeauty Logo" 
          className="w-full h-full object-cover"
        />
      </div>
      
      <h1 className="text-2xl font-bold mb-0" style={{ color: '#86d7b8' }}>
  Fit Beauty
</h1>
<h1 className="text-2xl font-bold mt-[-8px]" style={{ color: '#ff82a5' }}>
  ACREDITE NO SEU MOVIMENTO
</h1>
      <p className="text-gray-600 text-center mb-8 max-w-md leading-snug">
  Roupas que despertam o espírito 💫<br />
  Estilo, leveza e força para quem treina corpo e coragem.<br />
  ✈️ São Paulo para o mundo
</p>

      {/* Social Media Links */}
      <div className="w-full max-w-md space-y-4 mb-8">
        <h2 className="text-xl font-semibold text-gray-800 mb-4">Redes Sociais</h2>
        
        <a href="https://www.instagram.com/fitbeauty_modafitness/" className="flex items-center bg-gradient-to-r from-[#833AB4] via-[#C13584] to-[#E1306C] text-white p-4 rounded-lg hover:opacity-90 transition-opacity">
          <img src="/img/instagram.png" alt="Instagram" className="w-6 h-6 mr-3" />
          <span className="font-medium">Instagram</span>
        </a>

        <a href="https://www.facebook.com/profile.php?id=100089931905036" className="flex items-center bg-[#1877F2] text-white p-4 rounded-lg hover:opacity-90 transition-opacity">
          <img src="/img/facebook.png" alt="Facebook" className="w-6 h-6 mr-3" />
          <span className="font-medium">Facebook</span>
        </a>

        <a href="https://www.tiktok.com/@fitbeauty.modafitness" className="flex items-center bg-black text-white p-4 rounded-lg hover:opacity-90 transition-opacity">
          <img src="/img/tiktok.png" alt="TikTok" className="w-6 h-6 mr-3" />
          <span className="font-medium">TikTok</span>
        </a>

      </div>

      {/* Marketplaces */}
      <div className="w-full max-w-md space-y-4">
        <h2 className="text-xl font-semibold text-gray-800 mb-4">Marketplaces</h2>

        <a href="https://fitbeautymf.com.br/" className="flex items-center bg-[#FF9BB3] text-gray-800 p-4 rounded-lg hover:opacity-90 transition-opacity">
          <img src="/img/store.png" alt="Site Oficial" className="w-6 h-6 mr-3" />
          <span className="font-medium">Site Oficial</span>
        </a>

        <a href="https://lista.mercadolivre.com.br/_CustId_1289124856?item_id=MLB3746641451&category_id=MLB278018&seller_id=1289124856&client=recoview-selleritems&recos_listing=true" className="flex items-center bg-[#FFE600] text-black p-4 rounded-lg hover:opacity-90 transition-opacity">
          <img src="/img/mercadolivre.png" alt="Mercado Livre" className="w-6 h-6 mr-3" />
          <span className="font-medium">Mercado Livre</span>
        </a>

        <a href="https://shopee.com.br/shop/939346295" className="flex items-center bg-[#EE4D2D] text-white p-4 rounded-lg hover:opacity-90 transition-opacity">
          <img src="/img/shopee.png" alt="Shopee" className="w-6 h-6 mr-3" />
          <span className="font-medium">Shopee</span>
        </a>

        <a href="https://www.netshoes.com.br/fit-beauty" className="flex items-center bg-[#8A2BE2] text-white p-4 rounded-lg hover:opacity-90 transition-opacity">
          <img src="/img/netshoes.png" alt="Netshoes" className="w-6 h-6 mr-3" />
          <span className="font-medium">Netshoes</span>
        </a>
      </div>

      {/* Footer */}
      <footer className="mt-12 text-center text-gray-500 text-sm">
        <p>© 2025 FitBeauty - Todos os direitos reservados</p>
        <p>powered by <a href="https://wa.me/5511939555609?text=Olá,%20gostaria%20de%20saber%20mais%20sobre%20os%20seus%20serviços!" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 transition-colors">Sourcex</a></p>
      </footer>
    </div>
  );
}

export default App;
