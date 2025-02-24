# minimal Kamal v2 testapp

**local install**

```
cp env.example .env
docker compose up
```

**deployment steps**

```
gem install kamal
kamal -v

cp env.example .env
source export-env.sh

kamal setup
kamal details
kamal app details
```
