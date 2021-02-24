import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.scss']
})
export class ContentComponent implements OnInit {
  
  icon = 'https://www.freeiconspng.com/uploads/music-red-symbol-free-icon-27.png';  
  Qrcode = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAANMAAADvCAMAAABfYRE9AAAAeFBMVEX///8AAACYmJj6+vq0tLTLy8uDg4NHR0cSEhLExMSfn59dXV3x8fHd3d3i4uLo6Ohra2t7e3vU1NRMTEw7OztBQUG9vb2SkpKoqKhSUlJvb28XFxcsLCwzMzOMjIzIyMgkJCSvr692dnZiYmJZWVkeHh4MDAwvLy8QDlDjAAAIAElEQVR4nO2da1fqPBCFuQkKBQSlRVSkgvr//+G7aCYuJmc7JgW0+O794ayT2zRPcTW3SdJqURRFURRFURRFUTU0LjqpWkpRnCqJPRfKXajrnlJMXXBeKEPD5CoUE4upbCfrXori1K5L3LnQzIUySZwLhAt9mIZMvVhMvXR7Ayl6DVOFaeRCJpN/OY/pdbgiE5nIRKaGMw0e9hqMf5SpnE6+07Q+UyDM9BxRhWEKk9mIic7MdA/z4upGMd2QiUxkajpTvwFMXaj6TLMWMmQzWXWow7SA9ZxYTD1Y7RE0NNfVhkxXsOS2PtNdOlMO7dpMWpppDkvekolMZCLT7zO1LaYtNDRuOtO80nh2v/hXAz3Oe5S8o8M899vmMYlmsIjWo+QdqFjcjyATmchEpqYz9ROY9FCmgUzFeq9C3v1ieKjlvTLwvnYqXOq2sUzwoV64HyF9o2VjmfTYPWAy+3vm2J1MZCJTg5kG0GDMd2+r7e4imJ4h08nnwvq70b96mEKmrco0e7mpJIlraEjGhPnDPrR7hUzjB1ByV9RnMhUwad1IahemmmrQfLkWmZTIRKbvdGlMNdbdtX6GKU9hmg2/1TJgypy6kKmrEn3elkr0QWHaLL+vwyqFKUFBP6IHmaQfIc2q7ZPYPN+cHDJdtr8RmchEpr/MVKbbC/zLg2+5JMb4lz9pQykyuwjZOFneB1+CmWZ6rrQpXdbhxoU1UwYNpahGb6WGbuCLDP608XpuYxUwSZ+YTE0TmS5Df5HpBTKVv8E0n/UrBRWU2ARtIdN4WWmombT5WaaePZFEaYJK9LBZ1D41HTtsHys9v4H7EV5TldfPLQvpLTQfs0/tujlMfg1AmFZtpJg+LJnIRKZLZVrqvJipeyqml7xScVspaHMWq9tDpTBtnb0lNO93V7vEjsT2qtDNg7brqrDFDpuYSZxn1i401faWuqg55Mbz72K+0OaFKcbJpw3N2kx3immi7Q11Ubxfw2QakIlMZPpLTMF379KYZAlMmPpu1Stwk+n4tTAnz/T++c/Bf/IMqIuZxi7xC6Z3FdILeSaTF+68mJK5ZT/OFbvYN6cNmWLMe0lsyjkf9ZnwfPnxTD1V3a7EpqwBkIlMZCJTBNPyH9PRTGL3zN/yqDHhtFK2e9rr403bvZoeKphF3nzsi2xWWZU42VQW3nqqSNB4B0zzKZIkvlXmP5XCJEHTx1c0hnnECdf/cehGMdN5cd8oEHyK16mZTMdiz4TnI8hEJjL9D5jwd2+kmfRDbSa9/nQupm3eO1ApD81fZ5UkWgZrfZf3SjONqpyvpWbquLwdZ6fv7IjZ12BM1IOqz7SGeQuXuJAg3MPvmUTYN0e6KX6/hiQGU6JYZ2IyzyWIYsI+VDFMKf09MpGJTKdnGkQw+e9euzbT8d+9mLmwd2kq+q7lWLt2xFdXWqvCtSPSYrZc3tdhT7VP0oaJ1tLCvaq8ZvuUSUukpyWnytAqZk2tDV/ku2SSIeIQWpA9/CPTvATxmpruR1zB2FwbMmXOR2wk03ME0y1MFPPBuQRmfy9YoyYTmchEph9hWr5Vk2kLN2eXfUhVXDAYlvY3h/N7WtkSMvVd3vlj9ZRHmd/LNNNYWSo9v1ONNbWWfpFaz9DQDczbhkyiYG/DUDOZqrGmJppAe/YeyQQm3N+LYqoxX04mMpGJTBFMJ/uW+6byWUUG3/JTMwV+LCLvQjLX7ij69Yq2zsnFv4YcFtGRn62r8mPZibdM2zJ/6rllL+00Y66pYWF/o52kti3z52KCZwHhNQAykYlMf4QJnzMfs5C31bEp3z350q9dyE+qafOrBPNwH8BNcO7mSPn/+z1tudJQfPtzsaCK+Br1VazfB+A2CazkuMiN7DbQ+wCeVofmc7y0iJlEpm/OAhoKfHMCfyOJxX8GWHi/hsViM5k+VFHn5mgm3N+zhffVkIlMZPpZphLmNZnwdy/wL9fbwX6WqcY+an+lZ7k8lPfid6FSf7XffSYnaXPeoHm//60+0xFKeOdesrwnzR/+we09kmdmMvegYOE1ajKRiUxkqs0UbG2OqdgR51CZTE9yHlUMkz7QKmDqiyWnp5hzqMr0l+2rYjLJ4DrXsZhJEoM1NdOj9GfvoxaZ5+aYPlQmU509KGQiE5kujSm4M+T6DzK1z8RU47xlzKQ3b5uvzDPpIrZvTgrTqe+jDsybTFqnYzr1/blkIhOZyBTBVFpMUXNhmClqrFHjvpoYpml1h80L/rket+BhI7/8mgFDn4pZU6tzr1AMkyiDWW2Z1TYVMNW//4lMZCITmWKY4FMunAkOvYoYiFGxPpT+wcedQ3sd7FlzLqb6Kq16HtGP+E0mc4/kEf09MpGJTL/DdGKkRjANFnsN3mARrPvF13qWk8GyOVLgWdOAe8O9zC3dInwva6AG3O/uFXNvw+n2oJCJTGQiUwQTdgA3mV6TmLqVtIXuoU7/Le9CtSwmXATb0fvdvb5YnHNF6t9xcPz9uVFKYnKJF8qEL0sg06HIdFlMR99HHaWfZSqnk+/kt5UdwXSfwCQtCL5C5lx+LLuHvQbyC18NquCdVKV/V4U6+mnzq73mnSrRyx/NvHapXi7xbqhjz8wkwZi7ZgPhbXDB2F2bD2IbcH9uILzFBTMdf9Y3mchEpiOYynQmfB+1n1QUpt15mcwuwrjopMo/e1iFCpmzm4ghSey5UI6e2ZqjhxbBILijzHu5koV53ydFURRFURRFURT1hf4DFOY4nE4stEUAAAAASUVORK5CYII=";
  title = 'playMyList';

  constructor() { }

  ngOnInit(): void {
  }

}
