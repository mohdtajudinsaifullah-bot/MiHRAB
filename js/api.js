const MihrabAPI = {
  async getAllData() {
    const res = await fetch(`${MIHRAB_CONFIG.GAS_URL}?action=getAll`);
    return res.json();
  },

  async getPrayerTimes(zone = MIHRAB_CONFIG.PRAYER_ZONE) {
    const res = await fetch(`${MIHRAB_CONFIG.GAS_URL}?action=prayerTimes&zone=${zone}`);
    return res.json();
  },

  async post(payload) {
    const res = await fetch(MIHRAB_CONFIG.GAS_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'text/plain;charset=utf-8' },
      body: JSON.stringify(payload)
    });
    return res.json();
  },

  login(pin) {
    return this.post({ action: 'login', pin });
  },

  checkin({ id, role, pin, isSubstitute, substituteName, substituteReason }) {
    return this.post({
      action: 'checkin',
      id,
      role,
      pin,
      isSubstitute,
      substituteName,
      substituteReason
    });
  },

  createRecord(sheet, data, adminPin) {
    return this.post({ action: 'create', sheet, data, adminPin });
  },

  updateRecord(sheet, data, adminPin) {
    return this.post({ action: 'update', sheet, data, adminPin });
  },

  deleteRecord(sheet, id, adminPin) {
    return this.post({ action: 'delete', sheet, id, adminPin });
  }
};