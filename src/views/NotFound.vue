<template>
  <div class="not-found container text-left py-3">
    <main>
      <div class="row">
        <div class="col-md-12">
          <div class="error-template">
            <h1>Oops!</h1>
            <h2>404 Not Found</h2>

            <div class="error-details">Sorry, an error has occurred. Requested page not found!</div>

            <div class="error-actions">
              <router-link class="btn btn-primary" to="/">
                <font-awesome-icon :icon="['fas', 'home']" size="lg" class="me-2 _align-middle" />
                <span>Take Me Home</span>
              </router-link>
              <router-link class="btn btn-outline-secondary" to="/contact/">
                <font-awesome-icon :icon="['far', 'envelope']" size="lg" class="me-2 align-middle" />
                <span>Contact Support</span>
              </router-link>
            </div>
          </div>
        </div>
      </div>
    </main>
  </div>
</template>

<script>
// Font Awesome
import { faHome } from '@fortawesome/free-solid-svg-icons';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';
import { library } from '@fortawesome/fontawesome-svg-core';
library.add(faHome, faEnvelope);

export default {
  name: 'NotFound',
  metaInfo: {
    title: 'Page not Found - Websites by KARPOLAN',
  },
};
</script>

<style scoped>
.not-found {
  background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABoAAAAaCAYAAACpSkzOAAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAALEgAACxIB0t1+/AAAABZ0RVh0Q3JlYXRpb24gVGltZQAxMC8yOS8xMiKqq3kAAAAcdEVYdFNvZnR3YXJlAEFkb2JlIEZpcmV3b3JrcyBDUzVxteM2AAABHklEQVRIib2Vyw6EIAxFW5idr///Qx9sfG3pLEyJ3tAwi5EmBqRo7vHawiEEERHS6x7MTMxMVv6+z3tPMUYSkfTM/R0fEaG2bbMv+Gc4nZzn+dN4HAcREa3r+hi3bcuu68jLskhVIlW073tWaYlQ9+F9IpqmSfq+fwskhdO/AwmUTJXrOuaRQNeRkOd5lq7rXmS5InmERKoER/QMvUAPlZDHcZRhGN4CSeGY+aHMqgcks5RrHv/eeh455x5KrMq2yHQdibDO6ncG/KZWL7M8xDyS1/MIO0NJqdULLS81X6/X6aR0nqBSJcPeZnlZrzN477NKURn2Nus8sjzmEII0TfMiyxUuxphVWjpJkbx0btUnshRihVv70Bv8ItXq6Asoi/ZiCbU6YgAAAABJRU5ErkJggg==);
}

.not-found .error-template {
  padding: 40px 15px;
  text-align: center;
}

.not-found .error-actions {
  margin-top: 15px;
  margin-bottom: 15px;
}

.not-found .error-actions .btn {
  margin-right: 10px;
  margin-bottom: 10px;
}
</style>
