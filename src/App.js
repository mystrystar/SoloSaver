import React, { useState } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
import Header from './components/Header';
import HomePage from './pages/HomePage';
import RestaurantPage from './pages/RestaurantPage';
import OrderSummaryPage from './pages/OrderSummaryPage';
import GroupOrderHostPage from './pages/GroupOrderHostPage';
import GroupOrderJoinPage from './pages/GroupOrderJoinPage';
import JoinerConfirmationModal from './components/JoinerConfirmationModal';

function App() {
  const [cart, setCart] = useState([]);
  const [showMatchingModal, setShowMatchingModal] = useState(false);
  const [modalState, setModalState] = useState('matching'); // 'matching', 'matchFound', 'noMatch', 'hostLeftPromote', 'loyaltyWaived', 'matchSuccessJoiner'
  const [groupOrderId, setGroupOrderId] = useState(null); // To simulate a unique group order ID
  const [nearbyMatchAvailable, setNearbyMatchAvailable] = useState(false); // Initialize to false
  const [showJoinerConfirmationModal, setShowJoinerConfirmationModal] = useState(false);
  const [isMatched, setIsMatched] = useState(false); // New state to track if a match has been found

  const navigate = useNavigate(); // Initialize useNavigate


  const addToCart = (item) => {
    setCart([...cart, item]);
  };

  const handleStartMatching = () => {
    setShowMatchingModal(true);
    setModalState('matching');
    setGroupOrderId('SOLO123'); // Simulate a generated group order ID
    setIsMatched(false); // Reset isMatched when starting a new match
    setNearbyMatchAvailable(true); // A group order is now available to join
  };

  const handleCloseMatchingModal = () => {
    setShowMatchingModal(false);
    setModalState('matching'); // Reset to default state
    setNearbyMatchAvailable(false); // No group order available once modal is closed
  };

  const handleConfirmOrder = () => {
    alert('Order Confirmed!');
    setIsMatched(true); // Set isMatched to true when order is confirmed after a match
    setNearbyMatchAvailable(false); // No longer looking for match for this order
    handleCloseMatchingModal();
  };

  const handleExtendMatch = () => {
    setModalState('matching');
    // In a real app, you'd extend the timer on the backend here
    alert('Matching extended for 5 more minutes!');
  };

  const handleJoinMatch = () => {
    // For User B, when they click "Join Order" on homepage banner
    setShowJoinerConfirmationModal(true);
  };

  const handleCloseJoinerModal = () => {
    setShowJoinerConfirmationModal(false);
  };

  const handleConfirmJoin = () => {
    setModalState('matchSuccessJoiner'); // Set modal state for joiner success
    setShowJoinerConfirmationModal(false);
    setShowMatchingModal(true); // Show the timer modal with success message
    setIsMatched(true); // User B also gets matched
    setNearbyMatchAvailable(false); // The group order has been joined

    // Add a short delay then navigate to summary
    setTimeout(() => {
      setShowMatchingModal(false); // Close the success modal
      navigate('/summary'); // Redirect to Order Summary
    }, 2000); // 2 seconds delay for the user to read the success message
  };

  const handleSimulateNearbyMatch = () => {
    setNearbyMatchAvailable(true);
    setGroupOrderId('SIMULATED123'); // Simulate a group ID for the banner
    alert('Nearby match simulated! Check the homepage for the "Join Order" banner.');
  };


  return (
    <div>
      <Header cart={cart} />
      <main>
        <Routes>
          <Route 
            path="/" 
            element={
              <HomePage 
                nearbyMatch={nearbyMatchAvailable} 
                onJoinMatch={handleJoinMatch} 
                onSimulateNearbyMatch={handleSimulateNearbyMatch} // Pass the new prop
              />
            } 
          />
          <Route 
            path="/restaurant/:id" 
            element={<RestaurantPage addToCart={addToCart} />} 
          />
          <Route 
            path="/summary" 
            element={
              <OrderSummaryPage 
                cart={cart} 
                onStartMatching={handleStartMatching}
                showMatchingModal={showMatchingModal}
                modalState={modalState}
                onCloseMatchingModal={handleCloseMatchingModal}
                onConfirmOrder={handleConfirmOrder}
                onExtendMatch={handleExtendMatch}
                setModalState={setModalState} // Pass setter for simulation
                isMatched={isMatched} // Pass isMatched prop
              />
            } 
          />
          <Route path="/group-order/:orderId" element={<GroupOrderHostPage />} />
          <Route path="/join/:orderId" element={<GroupOrderJoinPage />} />
        </Routes>
      </main>
      {showJoinerConfirmationModal && (
        <JoinerConfirmationModal 
          onClose={handleCloseJoinerModal} 
          onConfirmJoin={handleConfirmJoin} 
        />
      )}
    </div>
  );
}

export default App;
