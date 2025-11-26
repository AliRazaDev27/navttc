import { useEffect, useState } from "react";
import {OrdersTable} from "./order-table";
import type { Order } from "@/types/orders";

const OrdersPage = () => {
  const [orders, setOrders] = useState<Order[]>();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const fetchOrders = async () => {
    try {
        const baseUrl = import.meta.env.VITE_BACKEND_URL || 'http://localhost:3000';
      const response = await fetch(`${baseUrl}/orders`);
      const result = await response.json();
      setOrders(result.data);
    } catch (err) {
      console.log(err);
      setError("Failed to load orders. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchOrders();
    
  }, []);

  return (
    <div className="p-6 w-full">
      <h1 className="text-3xl font-bold mb-6">Orders Dashboard</h1>

      {/* Loading */}
      {loading && (
        <div className="text-gray-600 text-center text-lg">
          Loading orders...
        </div>
      )}

      {/* Error */}
      {error && (
        <div className="text-red-600 text-center mb-4">
          {error}
        </div>
      )}

      {/* Orders Table */}
      {!loading && !error && orders && <OrdersTable orders={orders} />}
    </div>
  );
};

export default OrdersPage;
