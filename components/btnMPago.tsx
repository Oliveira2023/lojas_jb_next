import React from 'react';
import { initMercadoPago, Wallet } from '@mercadopago/sdk-react';

// Inicialize o Mercado Pago com seu Public Key
initMercadoPago('APP_USR-04d313b9-a38c-4f1d-977a-37e7e885f8d8');

const BtnMPago = () => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginTop: '50px' }}>
      <h1>Teste Botão de Pagamento</h1>
      <p>Clique no botão para realizar o pagamento.</p>
      {/* Renderize o botão de pagamento */}
      <div style={{ width: '300px' }}>
        <Wallet initialization={{ preferenceId: 'YOUR_PREFERENCE_ID' }} />
      </div>
    </div>
  );
};

export default BtnMPago;