import React, { useState } from 'react';
import HappyCoin from '../../imgs/happycoin.jpeg'
const HappyShop = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);

  const products = [
    {
      id: 1,
      name: "KinoTime!",
      price: "99 999",
      image: '../../imgs/shop/kino-time.PNG',
      description: "Проведи время перед экраном, за просмотром фильма вместе со своими друзьями! В свободное от уроков время."
    },
    {
      id: 2,
      name: "Ноутбук MacBook Air",
      price: "99 999",
      image: "https://images.unsplash.com/photo-1541807084-5c52b6b3adef?w=300&h=300&fit=crop",
      description: "Тонкий и легкий ноутбук с процессором M2, 13-дюймовым дисплеем Liquid Retina и временем работы до 18 часов. Идеален для работы и учебы."
    },
    {
      id: 3,
      name: "Наушники AirPods Pro",
      price: "99 999",
      image: "https://images.unsplash.com/photo-1606220588913-b3aacb4d2f46?w=300&h=300&fit=crop",
      description: "Беспроводные наушники с активным шумоподавлением, пространственным звуком и защитой от влаги IPX4."
    },
    {
      id: 4,
      name: "Планшет iPad Pro",
      price: "99 999",
      image: "https://images.unsplash.com/photo-1561154464-82e9adf32764?w=300&h=300&fit=crop",
      description: "Мощный планшет с 12.9-дюймовым дисплеем Liquid Retina XDR, процессором M2 и поддержкой Apple Pencil."
    },
    {
      id: 5,
      name: "Умные часы Apple Watch",
      price: "99 999",
      image: "https://images.unsplash.com/photo-1546868871-7041f2a55e12?w=300&h=300&fit=crop",
      description: "Смарт-часы с мониторингом здоровья, GPS, водонепроницаемостью и множеством приложений для активного образа жизни."
    },
    {
      id: 6,
      name: "Игровая консоль PlayStation 5",
      price: "99 999",
      image: "https://images.unsplash.com/photo-1606144042614-b2417e99c4e3?w=300&h=300&fit=crop",
      description: "Игровая консоль нового поколения с 4K-графикой, SSD-накопителем и поддержкой трассировки лучей."
    }
  ];

  const handleProductClick = (product) => {
    setSelectedProduct(product);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedProduct(null);
  };

  const handleBuyClick = (e, productName) => {
    e.stopPropagation();
    alert(`Товар "${productName}" добавлен в корзину!`);
  };

  return (
    <div style={{ 
      fontFamily: 'Arial, sans-serif',
      maxWidth: '1200px',
      margin: '0 auto',
      padding: '20px'
    }}>
      <h1 style={{
        textAlign: 'center',
        color: '#333',
        marginBottom: '30px',
        fontSize: '2.5rem'
      }}>
        HappyShop
      </h1>
      
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
        gap: '20px',
        marginBottom: '40px'
      }}>
        {products.map(product => (
          <div 
            key={product.id}
            onClick={() => handleProductClick(product)}
            style={{
              border: '1px solid #ddd',
              borderRadius: '12px',
              padding: '20px',
              backgroundColor: '#fff',
              boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
              cursor: 'pointer',
              transition: 'transform 0.2s, box-shadow 0.2s',
              ':hover': {
                transform: 'translateY(-2px)',
                boxShadow: '0 6px 12px rgba(0, 0, 0, 0.15)'
              }
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateY(-2px)';
              e.currentTarget.style.boxShadow = '0 6px 12px rgba(0, 0, 0, 0.15)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow = '0 4px 6px rgba(0, 0, 0, 0.1)';
            }}
          >
            <img 
              src={product.image} 
              alt={product.name}
              style={{
                width: '100%',
                height: '200px',
                objectFit: 'cover',
                borderRadius: '8px',
                marginBottom: '15px'
              }}
            />
            <h3 style={{
              margin: '0 0 10px 0',
              fontSize: '1.2rem',
              color: '#333'
            }}>
              {product.name}
            </h3>
            <p style={{
              color: '#666',
              fontSize: '0.9rem',
              lineHeight: '1.4',
              marginBottom: '15px'
            }}>
              {product.description.substring(0, 100)}...
            </p>
            <div style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center'
            }}>
              <span style={{
                fontSize: '1.3rem',
                fontWeight: 'bold',
                color: '#e74c3c'
              }}>
                {product.price}
                <img style={{width:45, paddingLeft:10, verticalAlign:"middle" }} src={HappyCoin} alt="" />
              </span>
              <button 
                onClick={(e) => handleBuyClick(e, product.name)}
                style={{
                  backgroundColor: '#27ae60',
                  color: 'white',
                  border: 'none',
                  padding: '10px 20px',
                  borderRadius: '6px',
                  cursor: 'pointer',
                  fontSize: '1rem',
                  transition: 'background-color 0.2s'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = '#2ecc71';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = '#27ae60';
                }}
              >
                Купить
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Модальное окно */}
      {isModalOpen && selectedProduct && (
        <div 
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            backgroundColor: 'rgba(0, 0, 0, 0.7)',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            zIndex: 1000
          }}
          onClick={handleCloseModal}
        >
          <div 
            style={{
              backgroundColor: 'white',
              padding: '30px',
              borderRadius: '12px',
              maxWidth: '600px',
              width: '90%',
              maxHeight: '80%',
              overflow: 'auto',
              position: 'relative'
            }}
            onClick={(e) => e.stopPropagation()}
          >
            <button 
              onClick={handleCloseModal}
              style={{
                position: 'absolute',
                top: '15px',
                right: '20px',
                background: 'none',
                border: 'none',
                fontSize: '24px',
                cursor: 'pointer',
                color: '#666'
              }}
            >
              ×
            </button>
            
            <img 
              src={selectedProduct.image} 
              alt={selectedProduct.name}
              style={{
                width: '100%',
                height: '300px',
                objectFit: 'cover',
                borderRadius: '8px',
                marginBottom: '20px'
              }}
            />
            
            <h2 style={{
              margin: '0 0 15px 0',
              color: '#333',
              fontSize: '1.8rem'
            }}>
              {selectedProduct.name}
            </h2>
            
            <p style={{
              color: '#666',
              lineHeight: '1.6',
              marginBottom: '20px',
              fontSize: '1rem'
            }}>
              {selectedProduct.description}
            </p>
            
            <div style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center'
            }}>
              <span style={{
                fontSize: '1.8rem',
                fontWeight: 'bold',
                color: '#e74c3c'
              }}>
                {selectedProduct.price}
                <img style={{width:45, paddingLeft:10, verticalAlign:"middle" }} src={HappyCoin} alt="" />
              </span>
              <button 
                onClick={(e) => handleBuyClick(e, selectedProduct.name)}
                style={{
                  backgroundColor: '#27ae60',
                  color: 'white',
                  border: 'none',
                  padding: '12px 30px',
                  borderRadius: '6px',
                  cursor: 'pointer',
                  fontSize: '1.1rem',
                  transition: 'background-color 0.2s'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = '#2ecc71';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = '#27ae60';
                }}
              >
                Купить
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default HappyShop;