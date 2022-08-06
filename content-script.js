const columns = ['Name', 'IdentityCard', 'OfficeTel', 'Address', 'Mail']

const data = {
  Name: '王小明',
  IdentityCard: 'A999999999',
  OfficeTel: '0912345678',
  Address: '500彰化縣彰化市中正路二段778號',
  Mail: 'test@example.com'
}

columns.forEach(e => {
  const target = document.getElementById(e)
  if (target && data[e]) target.value = data[e]
})

// 我同意

document.getElementById('DataCollectionConsultation').checked = true
