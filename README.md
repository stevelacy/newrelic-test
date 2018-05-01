# Newrelic Sequelize memory usage

Start the server:
```
$ export NEWRELIC_KEY=<key>
$ createdb newrelic_test
$ yarn start

```

Start the ab benchmark:
```
$ ./benchmark.sh

```

Without newrelic:
![](./images/1.png)


With newrelic:
![](./images/2.png)
