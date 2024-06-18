# redis installtion -
1. update the system
// sudo apt update

3. install the redis server
//sudo apt install redis-server

3.check the status
// sudo systemctl status redis

5. config the redis
// sudo nano /etc/redis/redis.conf

7. restart the redis
// sudo systemctl restart redis

9. enable the redis
//sudo systemctl enable redis

11. verify the redis server  -- default port is going to be 6379
// redis-cli

(you can run ping to verify its running or not)






These commands should cover most of the daily tasks you might encounter while working with Redis.
