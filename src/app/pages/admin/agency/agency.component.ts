import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CommonTableComponent } from '../../../components/common-components/common-table.component';
import { CommonPaginationComponent } from '../../../components/common-components/common-pagination.component';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-agency',
  standalone: true,
  imports: [CommonTableComponent, CommonPaginationComponent, FormsModule],
  templateUrl: './agency.component.html',
  styleUrls: ['./agency.component.css']
})
export class AgencyComponent {
  page = 1;
  pageSize = 12;
  search = '';
  showFilter = false;

  filter = {
    category: '',
    joinDate: '',
    mobile: '',
    status: ''
  };

  columns = [
    {label: 'Name', key: 'name'},
    {label: 'Join Date', key: 'joinDate'},
    {label: 'Mobile No', key: 'mobile'},
    {label: 'Commission', key: 'commission'},
    {label: 'Status', key: 'status'},
    {label: 'Providers', key: 'providers'},
    {label: 'Consumers', key: 'consumers'}
  ];

  data = Array.from({length: 42}).map((_, i) => ({
    id: i + 1,
    name: `Agency ${i < 9 ? '0' : ''}${i + 1}`,
    subtext: i % 2 === 0 ? 'Spiritual' : 'Fitness',
    joinDate: '10 March, 2023',
    mobile: '00 000 00000',
    commission: i % 3 === 0 ? '15%' : '10%',
    status: i % 5 === 0 ? 'Inactive' : 'Active',
    providers: 80 + (i % 10),
    consumers: 60 + (i % 10)
  }));

  get filteredData() {
    return this.data.filter(row => {
      const matchesCategory = !this.filter.category || row.subtext === this.filter.category;
      const matchesJoinDate = !this.filter.joinDate || row.joinDate === this.filter.joinDate;
      const matchesMobile = !this.filter.mobile || row.mobile.includes(this.filter.mobile);
      const matchesStatus = !this.filter.status || row.status === this.filter.status;
      const matchesSearch = !this.search || row.name.toLowerCase().includes(this.search.toLowerCase());
      return matchesCategory && matchesJoinDate && matchesMobile && matchesStatus && matchesSearch;
    });
  }

  get pagedData() {
    const start = (this.page - 1) * this.pageSize;
    return this.filteredData.slice(start, start + this.pageSize);
  }

  get showingText() {
    const start = (this.page - 1) * this.pageSize + 1;
    const end = Math.min(this.page * this.pageSize, this.filteredData.length);
    return `Showing ${start} to ${end} of ${this.filteredData.length} entries`;
  }

  actions = [
    {icon: 'edit', label: 'Edit', onClick: (row: any) => {}},
    {icon: 'delete', label: 'Delete', onClick: (row: any) => {}}
  ];

  constructor(private router: Router) {}

  onNameClick = (row: any) => {
    this.router.navigate(['/admin/agency', row.id]);
  };

  onPageChange(p: number) {
    this.page = p;
  }

  toggleFilter() {
    this.showFilter = !this.showFilter;
  }

  applyFilter() {
    this.page = 1;
    this.showFilter = false;
  }

  resetFilter() {
    this.filter = { category: '', joinDate: '', mobile: '', status: '' };
    this.page = 1;
  }

  get Math() {
    return Math;
  }

  goToAddAgency() {
    this.router.navigate(['/admin/agency/add']);
  }
} 