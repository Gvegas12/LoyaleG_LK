import { useLocation, useNavigate } from "react-router-dom";

/**
 * @returns Возвращает функцию, которая очищает состояние в location
 */
export const useOnClearLocationState = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const handleClearState = () => {
    // Навигация на текущий маршрут с удалением состояния
    navigate(location.pathname, { state: null });
  };

  return handleClearState;
};
