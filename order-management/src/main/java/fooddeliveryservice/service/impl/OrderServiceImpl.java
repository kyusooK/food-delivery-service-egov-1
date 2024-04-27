package fooddeliveryservice.service.impl;

import fooddeliveryservice.domain.AcceptOrderCommand;
import fooddeliveryservice.domain.NotifyRiderCommand;
import fooddeliveryservice.domain.Order;
import fooddeliveryservice.domain.OrderRepository;
import fooddeliveryservice.domain.PrepareFoodCommand;
import fooddeliveryservice.domain.RejectOrderCommand;
import fooddeliveryservice.service.OrderService;
import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;
import java.util.stream.StreamSupport;
import org.egovframe.rte.fdl.cmmn.EgovAbstractServiceImpl;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service("orderService")
@Transactional
public class OrderServiceImpl
    extends EgovAbstractServiceImpl
    implements OrderService {

    private static final Logger LOGGER = LoggerFactory.getLogger(
        OrderServiceImpl.class
    );

    @Autowired
    OrderRepository orderRepository;

    @Override
    public List<Order> getAllOrders() throws Exception {
        // Get all orders
        return StreamSupport
            .stream(orderRepository.findAll().spliterator(), false)
            .collect(Collectors.toList());
    }

    @Override
    public Optional<Order> getOrderById(String orderId) throws Exception {
        // Get a order by ID
        return orderRepository.findById(orderId);
    }

    @Override
    public Order createOrder(Order order) throws Exception {
        // Create a new order
        return orderRepository.save(order);
    }

    @Override
    public Order updateOrder(Order order) throws Exception {
        // Update an existing order via OrderService
        if (orderRepository.existsById(order.getOrderId())) {
            return orderRepository.save(order);
        } else {
            throw processException("info.nodata.msg");
        }
    }

    @Override
    public void deleteOrder(String orderId) throws Exception {
        // Delete a order
        orderRepository.deleteById(orderId);
    }

    @Override
    public Order acceptOrder(AcceptOrderCommand acceptOrderCommand)
        throws Exception {
            return null;
        // You can implement logic here, or call the domain method of the Order.

        /** Choice 1:  implement logic here        
        Optional<Order> optionalOrder = orderRepository.findById(acceptOrderCommand.getOrderId());

        if (optionalOrder.isPresent()) {
            Order order = optionalOrder.get();
            
            // business Logic....
            orderRepository.save(order);

            return order;
        } else {
            throw processException("info.nodata.msg");
        }
       

        /** Choice 2:  call the domain method of the Order.   
        return Order.acceptOrder(acceptOrderCommand);
           */
        return null;
    }

    @Override
    public Order rejectOrder(RejectOrderCommand rejectOrderCommand)
        throws Exception {
            return null;

        // You can implement logic here, or call the domain method of the Order.

        /** Choice 1:  implement logic here        
        Optional<Order> optionalOrder = orderRepository.findById(rejectOrderCommand.getOrderId());

        if (optionalOrder.isPresent()) {
            Order order = optionalOrder.get();
            
            // business Logic....
            orderRepository.save(order);

            return order;
        } else {
            throw processException("info.nodata.msg");
        }
       

        /** Choice 2:  call the domain method of the Order.   
        return Order.rejectOrder(rejectOrderCommand);
           */
        return null;
    }

    @Override
    public Order prepareFood(PrepareFoodCommand prepareFoodCommand)
        throws Exception {
            return null;

        // You can implement logic here, or call the domain method of the Order.

        /** Choice 1:  implement logic here        
        Optional<Order> optionalOrder = orderRepository.findById(prepareFoodCommand.getOrderId());

        if (optionalOrder.isPresent()) {
            Order order = optionalOrder.get();
            
            // business Logic....
            orderRepository.save(order);

            return order;
        } else {
            throw processException("info.nodata.msg");
        }
       

        /** Choice 2:  call the domain method of the Order.   
        return Order.prepareFood(prepareFoodCommand);
           */
        return null;
    }

    @Override
    public Order notifyRider(NotifyRiderCommand notifyRiderCommand)
        throws Exception {
            return null;

        // You can implement logic here, or call the domain method of the Order.

        /** Choice 1:  implement logic here        
        Optional<Order> optionalOrder = orderRepository.findById(notifyRiderCommand.getOrderId());

        if (optionalOrder.isPresent()) {
            Order order = optionalOrder.get();
            
            // business Logic....
            orderRepository.save(order);

            return order;
        } else {
            throw processException("info.nodata.msg");
        }
       

        /** Choice 2:  call the domain method of the Order.   
        return Order.notifyRider(notifyRiderCommand);
           */
        return null;
    }
}
