<template>
  <div>
    <DeliverySlot>
      <template v-slot:icon>
        <icon class="text-[40px] text-[#9d9d9d]" name="uil:map-pin-alt" />
      </template>

      <template v-slot:header>NEIGHBORHOODS, CITIES, ZIP CODES</template>

      <template v-slot:body>
        Philadelphia, Pittsburgh, Upper Darby, Lower Merion, Millcreek township,
        Lower Paxton, Haverford, York city, Altoona, Wilkes-Barre city, Penn
        Hills, State College, Cheltenham, Los Angeles, Lynwood, Maywood,
        Norwalk, Paramount, Santa Fe Springs, South Gate, Wilmington, and other
        prefered states.
      </template>
    </DeliverySlot>
  </div>
</template>